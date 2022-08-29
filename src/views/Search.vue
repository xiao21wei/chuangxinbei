<template>
  <div class="search">
    <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
    <el-form-item
    v-for="(keyword, index) in dynamicValidateForm.keyword"
    :label="'关键词' + Number(index+1)"
    :key="keyword.key"
    :prop="'keyword.' + index + '.value'"
    :rules="{
      required: true, message: '关键词不能为空', trigger: 'blur'
    }"
  >
  <el-input v-model="keyword.value" type="text" style="width: 60%">
  </el-input><el-button @click.prevent="removeKeyword(keyword)">删除</el-button>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
    <el-button @click="addKeyword">新增关键词</el-button>
    <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
  </el-form-item>
  </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dynamicValidateForm: {
          keyword: [{
            value: ''
          }],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit success!');
            this.$router.push('/result');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      removeKeyword(item) {
        var index = this.dynamicValidateForm.keyword.indexOf(item)
        if (index !== -1) {
          this.dynamicValidateForm.keyword.splice(index, 1)
        }
      },
      addKeyword(item) {
          this.dynamicValidateForm.keyword.push({
          value: '',
          key: Date.now()
        });
        }
    }
  }

</script>

<style scoped>
@import url("//unpkg.com/element-ui@2.15.7/lib/theme-chalk/index.css");
</style>