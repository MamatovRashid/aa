<template>
  <div class="addpage px-7">
    <div class="rounded-3xl bg-white p-8">
      <h1 class="font-bold text-xl">Ma'lumot qo'shish</h1>
      <el-form
        ref="form"
        class="mt-4 -mx-2 flex flex-wrap"
        :model="form"
        :label-position="labelPosition"
        label-width="120px"
      >
        <div class="w-1/3">
          <el-form-item label="Rasm" class="px-2" size="medium">
            <el-upload action="#" list-type="picture-card" :auto-upload="false" v-if="aa">
              <i slot="default" class="el-icon-plus"></i>
              <div slot="file" slot-scope="{ file }">
                <img
                  class="el-upload-list__item-thumbnail"
                  :src="file.url"
                  alt=""
                />
              </div>
            </el-upload>
          </el-form-item>
        </div>
        <div class="w-2/3 flex flex-wrap">
        <el-form-item label="Ismingiz" class="w-1/2 px-2" size="medium">
          <el-input
            v-model="form.firstname"
            placeholder="Ismingiz"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="Familiyangiz" class="w-1/2 px-2" size="medium">
          <el-input
            v-model="form.lastname"
            placeholder="Familiyangiz"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="Otangizning ismi" class="w-1/2 px-2" size="medium">
          <el-input
            v-model="form.famlyname"
            placeholder="Otangizning ismi"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="Bo'limlar" size="medium" class="w-1/2 px-2">
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
        <el-form-item label="Lavozimi" class="w-1/2 px-2" size="medium">
          <el-input
            v-model="form.position"
            placeholder="Lavozimi"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item
          label="Tug'ilgan kun/oy/yil"
          class="w-1/2 px-2"
          size="medium"
        >
          <el-date-picker
            v-model="form.date"
            type="date"
            placeholder="Tug'ilgan sana"
            format="dd/MM/yyyy"
            class="w-full"
            clearable
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="Jinsi" class="w-1/2 px-2" size="medium">
          <el-radio-group v-model="form.gender">
            <el-radio label="Erkak"></el-radio>
            <el-radio label="Ayol"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label=" " class="w-1/2 px-2 text-right" size="medium">
          <el-button type="primary" @click="onSubmit">Create</el-button>
          <el-button @click="aa = !aa">Cancel</el-button>
        </el-form-item>
        </div>
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
      aa: true,
      form: {
        firstname: "",
        lastname: "",
        familyname: "",
        department: "",
        position: "",
        gender: "",
        date: "",
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
    onSubmit() {
      console.log("submit!");
    },
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
    margin-bottom: 10px;
  }
  .el-date-editor {
    width: 100% !important;
  }
}
</style>
