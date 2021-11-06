<template>
  <div class="editpage px-7">
    <div class="rounded-3xl bg-white p-8">
      <h1 class="font-bold text-xl">Xodim ma'lumoti</h1>
      <el-form
        ref="form"
        class="mt-4 -mx-2 flex flex-wrap"
        :model="form"
        :rules="rules"
        :label-position="labelPosition"
        label-width="120px"
      >
        <el-form-item
          label="Ismi"
          prop="firstname"
          class="w-1/3 px-2"
          size="medium"
        >
          <el-input
            v-model="form.firstname"
            placeholder="Ismingiz"
            clearable
            :disabled="disabled"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="Familiyasi"
          prop="lastname"
          class="w-1/3 px-2"
          size="medium"
        >
          <el-input
            v-model="form.lastname"
            placeholder="Familiyangiz"
            clearable
            :disabled="disabled"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="Otasining ismi"
          prop="familyname"
          class="w-1/3 px-2"
          size="medium"
        >
          <el-input
            v-model="form.familyname"
            placeholder="Otangizning ismi"
            clearable
            :disabled="disabled"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="Bo'lim"
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
            :disabled="disabled"
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
            :disabled="disabled"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="Tug'ilgan sanasi"
          class="w-1/3 px-2"
          size="medium"
          prop="date"
        >
          <el-date-picker
            v-model="form.date"
            type="date"
            format="dd-MM-yyyy"
            value-format="dd-MM-yyyy"
            placeholder="Tug'ilgan sana"
            class="w-full"
            clearable
            :disabled="disabled"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item
          label="Jinsi"
          prop="gender"
          class="w-1/3 px-2"
          size="medium"
        >
          <el-radio-group v-model="form.gender">
            <el-radio label="Erkak" :disabled="disabled"></el-radio>
            <el-radio label="Ayol" :disabled="disabled"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label=" " class="flex-1 px-2 text-right" size="medium">
          <el-button type="primary" @click="onSubmit('form')"
            >Saqlash</el-button
          >
          <el-button @click="disabled = false">O'zgartirish</el-button>
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
      disabled: true,
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
  mounted() {
    this.edit();
  },
  methods: {
    onSubmit(form) {
      this.$refs[form].validate((valid) => {
        if (valid && !this.disabled) {
          let list = JSON.parse(localStorage.list);
          let index = parseInt(this.$route.query.index);
          for (let i = 0; i < list.length; i++) {
            if (index === i) {
              list[i] = this.form;
            }
          }
          localStorage.list = JSON.stringify(list);

          this.$notify({
            title: "Muaffaqiyatli",
            message: "Ma'lumot o'zgartirildi",
            type: "success",
          });
          this.$router.push('/employees')
        } else if (this.disabled) {
          this.$notify({
            title: "Ogohlantirish",
            message: "Siz ma'lumotni o'zgartirmadingiz",
            type: "warning",
          });
        } else {
          this.$notify.error({
            title: "Xato",
            message: "Ma'lumotni to'liq kiriting",
          });
          return false;
        }
      });
    },

    edit() {
      if (this.$route.query.index) {
        let list = JSON.parse(localStorage.list);
        let index = parseInt(this.$route.query.index);
        for (let i = 0; i < list.length; i++) {
          if (index === i) {
            this.form = list[i];
          }
        }
      }
    },
  },
};
</script>

<style lang="scss">
.editpage {
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
  .el-input.is-disabled .el-input__inner{
      color: rgb(19, 18, 18);
  }
}
</style>
