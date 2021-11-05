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
        <el-table-column width="50" prop="id"> </el-table-column>
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
          width="100"
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
      total: 0,
      pagesize: 10,
      currentPage: 1,
    };
  },
  computed: {
    list() {
      let arr = localStorage.list ? JSON.parse(localStorage.list) : [];
      return arr;
    },
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
  },
};
</script>

<style>
.employees {
}
</style>
