<template>
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="用户名" prop="user">
      <el-input type="text" v-model="ruleForm.user" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pass">
      <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="checkPass">
      <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  export default {
    data() {
      var checkuser = (rule, value, callback) => {
        if (!/[a*z][\w-]+/.test(value)) {
          return callback(new Error('cuocuol'));
        }
        else{
          callback()
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          user:"",
          pass: '',
          checkPass: '',
        },
        rules: {
          user:[
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 4, max: 12, message: '长度在 4 到 12 个字符', trigger: 'blur' },
            { validator: checkuser, trigger: 'blur' }
          ],
          pass: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' },
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          console.log(valid);
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
     
    }
  }
</script>