<template>
  <div class="addpage px-7">
    <div class="rounded-3xl bg-white p-8">
      <h1 class="font-bold text-xl">Ma'lumot qo'shish</h1>
      <el-form
        ref="form"
        class="mt-4 -mx-2 flex flex-wrap"
        :model="form"
        :rules="rules"
        :label-position="labelPosition"
        label-width="120px"
      >
        <el-form-item
          label="Ismingiz"
          prop="firstname"
          class="w-1/3 px-2"
          size="medium"
        >
          <el-input
            v-model="form.firstname"
            placeholder="Ismingiz"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item
          label="Familiyangiz"
          prop="lastname"
          class="w-1/3 px-2"
          size="medium"
        >
          <el-input
            v-model="form.lastname"
            placeholder="Familiyangiz"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item
          label="Otangizning ismi"
          prop="familyname"
          class="w-1/3 px-2"
          size="medium"
        >
          <el-input
            v-model="form.familyname"
            placeholder="Otangizning ismi"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item
          label="Bo'limlar"
          prop="department"
          size="medium"
          class="w-1/3 px-2"
        >
          <el-select
            v-model="form.department"
            filterable
            placeholder="Bo'limlar"
            class="w-full"
            clearable
          >
            <el-option
              v-for="dep in department"
              :key="dep.value"
              :label="dep.label"
              :value="dep.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="Lavozimi"
          prop="position"
          class="w-1/3 px-2"
          size="medium"
        >
          <el-input
            v-model="form.position"
            placeholder="Lavozimi"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item
          label="Tug'ilgan yil-oy-kun"
          class="w-1/3 px-2"
          size="medium"
          prop="date"
        >
          <el-date-picker
            v-model="form.date"
            type="date"
            value-format="dd-MM-yyyy"
            placeholder="Tug'ilgan sana"
            class="w-full"
            clearable
          >
          </el-date-picker>
          {{ form.date }}
        </el-form-item>
        <el-form-item
          label="Jinsi"
          prop="gender"
          class="w-1/3 px-2"
          size="medium"
        >
          <el-radio-group v-model="form.gender">
            <el-radio label="Erkak"></el-radio>
            <el-radio label="Ayol"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label=" " class="flex-1 px-2 text-right" size="medium">
          <el-button type="primary" @click="onSubmit('form')">Qo'shish</el-button>
          <el-button  @click="resetForm('form')">Tozalash</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddPage",
  data() {
    return {
      labelPosition: "top",
      form: {
        id: null,
        firstname: "",
        lastname: "",
        familyname: "",
        department: "",
        position: "",
        gender: "",
        date: "",
      },
      rules: {
        firstname: [
          {
            required: true,
            message: "Ismingizni kiriting!",
            trigger: "change",
          },
        ],
        lastname: [
          {
            required: true,
            message: "Familiyangizni kiriting!",
            trigger: "change",
          },
        ],
        familyname: [
          {
            required: true,
            message: "Otangizni ismini kiriting!",
            trigger: "change",
          },
        ],
        department: [
          {
            required: true,
            message: "Bo'limlarni kiriting!",
            trigger: "change",
          },
        ],
        position: [
          {
            required: true,
            message: "Lavozimni kiriting!",
            trigger: "change",
          },
        ],
        gender: [
          {
            required: true,
            message: "belgilang!",
            trigger: "change",
          },
        ],
        date: [
          {
            required: true,
            message: "Tug'ilgan sanangizni kiriting!",
            trigger: "change",
          },
        ],
      },
      department: [
        {
          value: "accounting",
          label: "Buxgalteriya",
        },
        {
          value: "IT",
          label: "IT",
        },
        {
          value: "marketing",
          label: "marketing",
        },
      ],
    };
  },
  methods: {
    onSubmit(form) {
      this.form.id = localStorage.list ? JSON.parse(localStorage.list).length + 1 : 1;
      this.$refs[form].validate((valid) => {
        if (valid) {
          let arr = localStorage.list ? JSON.parse(localStorage.list) : [];
          arr.push(this.form);
          localStorage.list = JSON.stringify(arr);

          this.$notify({
            title: "Success",
            message: "This is a success message",
            type: "success",
          });
        } else {
          this.$notify.error({
            title: "Error",
            message: "This is an error message",
          });
          return false;
        }
      });
    },
    resetForm(form) {
        this.$refs[form].resetFields();
      }
  },
};
</script>

<style lang="scss">
.addpage {
  .el-form-item__label {
    line-height: 1.2 !important;
    padding-bottom: 5px !important;
  }
  .el-form-item {
    margin-bottom: 14px;
  }
  .el-form-item__error {
    padding-top: 1px !important;
    right: 0 !important;
    text-align: right;
  }

  .el-date-editor {
    width: 100% !important;
  }
}
</style>
