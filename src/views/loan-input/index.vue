<template>
  <!-- 贷款申请 -->
  <div class="app-container">
    <div class="filter-container">
    </div>
    <el-form
      ref="temp"
      :rules="rules"
      :model="temp"
      label-position="left"
      label-width="80px"
    >
      <el-card class="box-card">

        <div
          slot="header"
          class="clearfix"
        >
          <div style="line-height: 14px">
            <el-button
              type="primary"
              @click="srollToBottom"
            >滚动到底部</el-button>
          </div>
          <span>个人基本信息</span>

        </div>
        <el-row :gutter="10">
          <el-col
            :xs="24"
            :sm="12"
            :md="8"
            :lg="8"
          >
            <el-form-item
              label="姓名"
              prop="name"
            >
              <el-input v-model="temp.name" />
            </el-form-item>
          </el-col>
          <el-col
            :xs="24"
            :sm="12"
            :md="8"
            :lg="8"
          >
            <el-form-item
              label="出生日期"
              prop="birthday"
            >
              <el-date-picker
                type="datetime"
                v-model="temp.birthday"
              />
            </el-form-item>
          </el-col>
          <el-col
            :xs="24"
            :sm="12"
            :md="8"
            :lg="8"
          >
            <el-form-item
              label="性别"
              prop="sex"
            >
              <el-select
                v-model="temp.sex"
                class="filter-item"
                placeholder="Please select"
              >
                <el-option
                  v-for="item in sexOptions"
                  :key="item.key"
                  :label="item.display_name"
                  :value="item.key"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col
            :xs="24"
            :sm="12"
            :md="8"
            :lg="8"
          >
            <el-form-item
              label="身份证"
              prop="identity_card"
            >
              <el-input v-model.number="temp.identity_card" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="10">
          <el-col
            :xs="24"
            :sm="12"
            :md="8"
            :lg="8"
          >
            <el-form-item
              label="婚姻状态"
              prop="marriage"
            >
              <el-select
                v-model="temp.marriage"
                class="filter-item"
                placeholder="Please select"
              >
                <el-option
                  v-for="item in marriageOptions"
                  :key="item.key"
                  :label="item.display_name"
                  :value="item.key"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col
            :xs="24"
            :sm="12"
            :md="8"
            :lg="8"
          >
            <el-form-item
              label="教育程度"
              prop="education"
            >
              <el-select
                v-model="temp.education"
                class="filter-item"
                placeholder="Please select"
              >
                <el-option
                  v-for="item in educationOptions"
                  :key="item.key"
                  :label="item.display_name"
                  :value="item.key"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col
            :xs="24"
            :sm="12"
            :md="8"
            :lg="8"
          >
            <el-form-item
              label="居住地址"
              prop="address1"
            >
              <el-input v-model="temp.address1" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="10">
          <el-col
            :xs="24"
            :sm="12"
            :md="8"
            :lg="8"
          >
            <el-form-item
              label="户籍地址"
              prop="address2"
            >
              <el-input v-model="temp.address2" />
            </el-form-item>
          </el-col>
          <el-col
            :xs="24"
            :sm="12"
            :md="8"
            :lg="8"
          >
            <el-form-item
              label="居住电话"
              prop="phone"
            >
              <el-input v-model.number="temp.phone" />
            </el-form-item>
          </el-col>
          <el-col
            :xs="24"
            :sm="12"
            :md="8"
            :lg="8"
          >
            <el-form-item
              label="手机号"
              prop="mobile_phone"
            >
              <el-input v-model.number="temp.mobile_phone" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>

      <!-- 职业信息 -->
      <el-card class="box-card">
        <div
          slot="header"
          class="clearfix"
        >
          <span>职业信息</span>
        </div>
        <el-row :gutter="10">
          <el-col
            :xs="24"
            :sm="12"
            :md="6"
            :lg="6"
          >
            <el-form-item
              label="现职公司全称"
              prop="company"
            >
              <el-input v-model="temp.company" />
            </el-form-item>
          </el-col>
          <el-col
            :xs="24"
            :sm="12"
            :md="6"
            :lg="6"
          >
            <el-form-item
              label="所属行业"
              prop="trade"
            >
              <el-select
                v-model="temp.trade"
                class="filter-item"
                placeholder="Please select"
              >
                <el-option
                  v-for="item in companyOptions"
                  :key="item.key"
                  :label="item.display_name"
                  :value="item.key"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col
            :xs="24"
            :sm="12"
            :md="6"
            :lg="6"
          >
            <el-form-item
              label="职位"
              prop="position"
            >
              <el-input v-model="temp.position" />
            </el-form-item>
          </el-col>
          <el-col
            :xs="24"
            :sm="12"
            :md="6"
            :lg="6"
          >
            <el-form-item
              label="公司地址"
              prop="address3"
            >
              <el-input v-model="temp.address3" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="10">
          <el-col
            :xs="24"
            :sm="12"
            :md="8"
            :lg="8"
          >
            <el-form-item
              label="公司类型"
              prop="company_type"
            >
              <el-input v-model="temp.company_type" />
            </el-form-item>
          </el-col>
          <el-col
            :xs="24"
            :sm="12"
            :md="8"
            :lg="8"
          >
            <el-form-item
              label="公司邮箱"
              prop="company_email"
            >
              <el-input v-model="temp.company_email" />
            </el-form-item>
          </el-col>
          <el-col
            :xs="24"
            :sm="12"
            :md="8"
            :lg="8"
          >
            <el-form-item
              label="公司电话"
              prop="company_phone"
            >
              <el-input v-model.number="temp.company_phone" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>

      <!-- 收支情况 -->
      <el-card class="box-card">
        <div
          slot="header"
          class="clearfix"
        >
          <span>收支情况</span>
        </div>
        <el-row :gutter="10">
          <el-col
            :xs="24"
            :sm="12"
            :md="8"
            :lg="8"
          >
            <el-form-item
              label="收支情况"
              prop="income"
            >
              <el-input v-model="temp.income" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>

      <!-- 家庭联系人 -->
      <el-card class="box-card">
        <div
          slot="header"
          class="clearfix"
        >
          <span>家庭联系人</span>
        </div>
        <el-row :gutter="10">
          <el-col
            :xs="24"
            :sm="12"
            :md="8"
            :lg="8"
          >
            <el-form-item
              label="关系1"
              prop="contact"
            >
              <el-input v-model="temp.contact" />
            </el-form-item>
          </el-col>
          <el-col
            :xs="24"
            :sm="12"
            :md="8"
            :lg="8"
          >
            <el-form-item
              label="姓名"
              prop="contact_name"
            >
              <el-input v-model="temp.contact_name" />
            </el-form-item>
          </el-col>
          <el-col
            :xs="24"
            :sm="12"
            :md="8"
            :lg="8"
          >
            <el-form-item
              label="手机"
              prop="contact_phone"
            >
              <el-input v-model.number="temp.contact_phone" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>

      <!-- 工作证明人 -->
      <el-card class="box-card">
        <div
          slot="header"
          class="clearfix"
        >
          <span>工作证明人</span>
        </div>
        <el-row :gutter="10">
          <el-col
            :xs="24"
            :sm="12"
            :md="8"
            :lg="8"
          >
            <el-form-item
              label="关系2"
              prop="contact2"
            >
              <el-input v-model="temp.contact2" />
            </el-form-item>
          </el-col>
          <el-col
            :xs="24"
            :sm="12"
            :md="8"
            :lg="8"
          >
            <el-form-item
              label="姓名"
              prop="contact2_name"
            >
              <el-input v-model="temp.contact2_name" />
            </el-form-item>
          </el-col>
          <el-col
            :xs="24"
            :sm="12"
            :md="8"
            :lg="8"
          >
            <el-form-item
              label="手机"
              prop="contact2_phone"
            >
              <el-input v-model.number="temp.contact2_phone" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="10">
          <el-col
            :xs="24"
            :sm="12"
            :md="8"
            :lg="8"
          >
            <el-form-item
              label="部门"
              prop="contact2_dep"
            >
              <el-input v-model="temp.contact2_dep" />
            </el-form-item>
          </el-col>
          <el-col
            :xs="24"
            :sm="12"
            :md="8"
            :lg="8"
          >
            <el-form-item
              label="职位"
              prop="contact2_pos"
            >
              <el-input v-model="temp.contact2_pos" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="10">
          <el-col
            :xs="24"
            :sm="12"
            :md="8"
            :lg="8"
          >
            <el-form-item label="备注">
              <el-input
                v-model="temp.remark"
                :autosize="{ minRows: 2, maxRows: 4}"
                type="textarea"
                placeholder="请输入备注信息"
              />
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>

    </el-form>
    <div
      slot="footer"
      class="dialog-footer"
    >
      <el-button
        id="sroll-to-bottom"
        type="primary"
        @click="submitForm('temp')"
      >立即创建</el-button>
      <el-button @click="resetForm('temp')">重置</el-button>

    </div>
  </div>
</template>

<script>
import { sexOptions, companyOptions, marriageOptions, educationOptions } from '@/utils/selectData'
import { reqLoanCreate } from '@/api'
import notification from '@/utils/notification'

export default {
  name: 'ComplexTable',
  //components: { Pagination },
  data() {
    return {
      temp: {
        name: this.randomName(), //姓名
        identity_card: this.randomIdcard(), //身份证
        birthday: new Date(), //出生日期
        sex: this.randomSex(), //性别
        marriage: '未婚', //婚姻状态
        education: this.randomEducation(), //教育程度
        address1: this.randomAdress(), //居住地址
        address2: this.randomAdress(), //户籍地址
        phone: this.randomPhone(), //居住电话
        mobile_phone: this.randomPhone(), //手机号
        company: '中国很厉害公司', //现职公司全称
        trade: '教育', //所属行业
        position: '大佬', //职位
        address3: '公司某个地址', //公司地址
        company_type: '教育', //公司类型
        company_email: '4422342@163.com', //公司邮箱
        company_phone: '2424223', //公司电话
        income: '999999', //收支情况
        contact: '父母', //关系1
        contact_name: this.randomName(), //姓名
        contact_phone: this.randomPhone(), //手机
        contact2: '同事', //关系2
        contact2_name: this.randomName(), //姓名
        contact2_phone: this.randomPhone(), //手机
        contact2_dep: '一部', //部门
        contact2_pos: '上司', //职位
        remark: '无' //备注
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
        ],
        identity_card: [{ required: true, message: '请输入身份证', trigger: 'change' }],
        birthday: [{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }],
        sex: [{ required: true, message: '请选择性别', trigger: 'change' }],
        marriage: [{ required: true, message: '请选择婚姻状态', trigger: 'change' }],
        education: [{ required: true, message: '请选择教育程度', trigger: 'change' }],
        trade: [{ required: true, message: '请选择所属行业', trigger: 'change' }],

        address1: [{ required: true, message: '请输入居住地址', trigger: 'blur' }],
        address2: [{ required: true, message: '请输入户籍地址', trigger: 'blur' }],
        phone: [{ required: true, message: '请输入居住电话', trigger: 'blur' }],
        mobile_phone: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
        company: [{ required: true, message: '请输入现职公司全称', trigger: 'blur' }],
        position: [{ required: true, message: '请输入职位', trigger: 'blur' }],
        address3: [{ required: true, message: '请输入公司地址', trigger: 'blur' }],
        company_type: [{ required: true, message: '请输入公司类型', trigger: 'blur' }],
        company_email: [{ required: true, message: '请输入公司邮箱', trigger: 'blur' }],
        company_phone: [{ required: true, message: '请输入公司电话', trigger: 'blur' }],
        income: [{ required: true, message: '请输入收支情况', trigger: 'blur' }],
        contact: [{ required: true, message: '请输入关系1', trigger: 'blur' }],
        contact_name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        contact_phone: [{ required: true, message: '请输入手机', trigger: 'blur' }],
        contact2: [{ required: true, message: '请输入关系2', trigger: 'blur' }],
        contact2_name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        contact2_phone: [{ required: true, message: '请输入手机', trigger: 'blur' }],
        contact2_dep: [{ required: true, message: '请输入部门', trigger: 'blur' }],
        contact2_pos: [{ required: true, message: '请输入职位', trigger: 'blur' }]
      },

      sexOptions,
      companyOptions,
      marriageOptions,
      educationOptions
    }
  },
  methods: {
    // 提交表单
    submitForm(formName) {
      // 开启全屏loading
      const loading = this.$loading({
        lock: true,
        text: '创建中...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })

      console.log(11111111)
      // 获取表单验证
      this.$refs[formName].validate((valid) => {
        console.log(3333333333)
        if (valid) {
          console.log(22222222)
          console.log(this.temp)
          reqLoanCreate(this.temp).then((res) => {
            console.log('贷款申请', res)
            let { code, data } = res.data
            if (code == 20000) {
              // 关闭全屏loading
              loading.close()
              // 通知提示框
              notification(this.temp.name, '创建成功')
              // 组件间通信，全局事件总线，将数据传到navMenu组件，让它激活对应的导航项
              this.$bus.$emit('navChange', '/input-manager')
              // 路由跳转
              this.$router.push('/input-manager')
            } else {
              // 关闭全屏loading
              loading.close()
              notification('失败', data, 'warning')
            }
          })
        } else {
          //alert('error submit!!');

          return false
        }
      })
    },
    // 滚动到底部
    srollToBottom() {
      document.querySelector('#sroll-to-bottom').scrollIntoView({
        behavior: 'smooth'
      })
    },
    // 随机姓名
    randomName() {
      const familyNames = [
        '赵',
        '钱',
        '孙',
        '李',
        '周',
        '吴',
        '郑',
        '王',
        '冯',
        '陈',
        '褚',
        '卫',
        '蒋',
        '沈',
        '韩',
        '杨',
        '朱',
        '秦',
        '尤',
        '许',
        '何',
        '吕',
        '施',
        '张',
        '孔',
        '曹',
        '严',
        '华',
        '金',
        '魏',
        '陶',
        '姜',
        '戚',
        '谢',
        '邹',
        '喻',
        '柏',
        '水',
        '窦',
        '章',
        '云',
        '苏',
        '潘',
        '葛',
        '奚',
        '范',
        '彭',
        '郎',
        '鲁',
        '韦',
        '昌',
        '马',
        '苗',
        '凤',
        '花',
        '方',
        '俞',
        '任',
        '袁',
        '柳',
        '酆',
        '鲍',
        '史',
        '唐',
        '费',
        '廉',
        '岑',
        '薛',
        '雷',
        '贺',
        '倪',
        '汤',
        '滕',
        '殷',
        '罗',
        '毕',
        '郝',
        '邬',
        '安',
        '常',
        '乐',
        '于',
        '时',
        '傅',
        '皮',
        '卞',
        '齐',
        '康',
        '伍',
        '余',
        '元',
        '卜',
        '顾',
        '孟',
        '平',
        '黄',
        '和',
        '穆',
        '萧',
        '尹'
      ]
      const givenNames = [
        '子璇',
        '淼',
        '国栋',
        '夫子',
        '瑞堂',
        '甜',
        '敏',
        '尚',
        '国贤',
        '贺祥',
        '晨涛',
        '昊轩',
        '易轩',
        '益辰',
        '益帆',
        '益冉',
        '瑾春',
        '瑾昆',
        '春齐',
        '杨',
        '文昊',
        '东东',
        '雄霖',
        '浩晨',
        '熙涵',
        '溶溶',
        '冰枫',
        '欣欣',
        '宜豪',
        '欣慧',
        '建政',
        '美欣',
        '淑慧',
        '文轩',
        '文杰',
        '欣源',
        '忠林',
        '榕润',
        '欣汝',
        '慧嘉',
        '新建',
        '建林',
        '亦菲',
        '林',
        '冰洁',
        '佳欣',
        '涵涵',
        '禹辰',
        '淳美',
        '泽惠',
        '伟洋',
        '涵越',
        '润丽',
        '翔',
        '淑华',
        '晶莹',
        '凌晶',
        '苒溪',
        '雨涵',
        '嘉怡',
        '佳毅',
        '子辰',
        '佳琪',
        '紫轩',
        '瑞辰',
        '昕蕊',
        '萌',
        '明远',
        '欣宜',
        '泽远',
        '欣怡',
        '佳怡',
        '佳惠',
        '晨茜',
        '晨璐',
        '运昊',
        '汝鑫',
        '淑君',
        '晶滢',
        '润莎',
        '榕汕',
        '佳钰',
        '佳玉',
        '晓庆',
        '一鸣',
        '语晨',
        '添池',
        '添昊',
        '雨泽',
        '雅晗',
        '雅涵',
        '清妍',
        '诗悦',
        '嘉乐',
        '晨涵',
        '天赫',
        '玥傲',
        '佳昊',
        '天昊',
        '萌萌',
        '若萌'
      ]
      const i = parseInt(Math.random() * familyNames.length)
      const familyName = familyNames[i]
      const j = parseInt(Math.random() * givenNames.length)
      const givenName = givenNames[j]
      const name = familyName + givenName
      return name
    },
    // 随机身份证
    randomIdcard() {
      var coefficientArray = ['7', '9', '10', '5', '8', '4', '2', '1', '6', '3', '7', '9', '10', '5', '8', '4', '2'] // 加权因子
      var lastNumberArray = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'] // 校验码
      var address = '420101' // 住址
      var birthday = '19810101' // 生日
      var s = Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString()
      var array = (address + birthday + s).split('')
      var total = 0
      for (i in array) {
        total = total + parseInt(array[i]) * parseInt(coefficientArray[i])
      }
      var lastNumber = lastNumberArray[parseInt(total % 11)]
      var id_no_String = address + birthday + s + lastNumber
      var x = document.getElementsByName('id_no')
      for (var i = 0; i < x.length; i++) {
        var o = x[i]
        o.value = id_no_String
      }
      return id_no_String
    },
    // 随机男女
    randomSex() {
      const sex = Math.random() > 0.5 ? '男' : '女'
      return sex
    },
    // 随机教育程度
    randomEducation() {
      const education = Math.random() > 0.5 ? '大学' : '高中'
      return education
    },
    // 随机居住地址
    randomAdress() {
      const familyNames = ['广东省', '江西省', '福建省', '贵州省', '云南省', '四川省', '青海省', '内蒙古', '河南省']
      const givenNames = ['人民路', '建设路', '文化路', '解放路', '公园路', '迎宾路', '和平路', '新华路', '青年路']
      const i = parseInt(Math.random() * familyNames.length)
      const familyName = familyNames[i]
      const j = parseInt(Math.random() * givenNames.length)
      const givenName = givenNames[j]
      const name = familyName + givenName
      return name
    },
    // 随机手机号
    randomPhone() {
      let prefixArray = new Array('130', '131', '132', '133', '135', '137', '138', '170', '187', '189')
      let i = parseInt(10 * Math.random())
      let prefix = prefixArray[i]
      for (var j = 0; j < 8; j++) {
        prefix = prefix + Math.floor(Math.random() * 10)
      }
      return prefix
    }
  }
}
</script>
<style>
.box-card {
  margin-bottom: 15px;
}
</style>
