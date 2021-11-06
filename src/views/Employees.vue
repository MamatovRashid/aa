<template>
  <div class="employees px-7">
    <div class="bg-white rounded-3xl pb-8">
      <h1 class="font-bold text-xl p-8">Barcha xodimlar ro'yhati</h1>
      <el-table
        ref="filterTable"
        :data="list.slice((currentPage - 1) * pagesize, currentPage * pagesize)"
        stripe
        style="width: 100%"
        class="text-lg"
      >
        <el-table-column width="22"> </el-table-column>
        <el-table-column type="index" width="50"> </el-table-column>
        <el-table-column prop="lastname" label="Familiyasi" sortable>
        </el-table-column>
        <el-table-column prop="firstname" label="Ismi" sortable>
        </el-table-column>
        <el-table-column prop="familyname" label="Otasining ismi" sortable>
        </el-table-column>
        <el-table-column
          prop="department"
          label="Bo'lim"
          :filters="[
            { text: 'Marketing', value: 'marketing' },
            { text: 'Buxgalteriya', value: 'accounting' },
            { text: 'IT', value: 'IT' },
          ]"
          :filter-method="filterDep"
        >
        </el-table-column>
        <el-table-column
          prop="gender"
          label="Jins"
          width="80"
          :filters="[
            { text: 'Erkak', value: 'Erkak' },
            { text: 'Ayol', value: 'Ayol' },
          ]"
          :filter-method="filterGen"
          filter-placement="bottom-end"
        >
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.gender === 'Erkak' ? 'primary' : 'success'"
              disable-transitions
              >{{ scope.row.gender }}</el-tag
            >
          </template>
        </el-table-column>
        <el-table-column label="Operations" width="200">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index)"
              ><i class="far fa-eye"></i> Open</el-button
            >
            <el-popconfirm title="Ushbu ma'lumotno o'chirmoqchimisiz?" confirm-button-text='Ha'
  cancel-button-text="Yo'q" @confirm="handleDelete(scope.$index)">
              <el-button 
              size="mini"
              type="danger" slot="reference" @="aa"><i class="far fa-trash-alt"></i> Delete</el-button>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="mt-7 text-right"
        background
        layout="prev, pager, next"
        :total="list.length"
        @current-change="current_change"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "Employees",
  data() {
    return {
      list: [],
      total: 0,
      pagesize: 10,
      currentPage: 1,
    };
  },
  mounted() {
    this.employeeList();
  },
  methods: {
    filterDep(value, row) {
      return row.department === value;
    },
    filterGen(value, row) {
      return row.gender === value;
    },
    current_change: function (currentPage) {
      this.currentPage = currentPage;
    },
    handleEdit(index) {
      this.$router.push(`/editpage?index=${index}`);
    },
    handleDelete(index) {
      let arr = JSON.parse(localStorage.list);
      arr.splice(index, 1);
      localStorage.list = JSON.stringify(arr);
      this.list = JSON.parse(localStorage.list);
    },
    employeeList() {
      this.list = JSON.parse(localStorage.list);
    },
  },
};
</script>

<style></style>
