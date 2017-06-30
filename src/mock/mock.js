import Mock from 'mockjs'

Mock.mock('/api/getWorkspaces', [
  {'ID': '11111', 'name': '安徽八一化工集团项目', 'appCount': 8},
  {'ID': '11112', 'name': 'KuickDeal', 'appCount': 1},
  {'ID': '11113', 'name': '澳大利亚邮政', 'appCount': 3},
  {'ID': '11114', 'name': 'OCBC Bank', 'appCount': 5}
])

Mock.mock('/api/getProjects', [
  {'ID': '11111111111', 'name': '澳大利亚邮政', 'remark': '这是一个应用', 'releasedDate': '2017-04-10 10:27:00', 'version': 'V8.2.6', 'titleImage': '../assets/sample/aodaliyayouzheng.png'},
  {'ID': '11111111112', 'name': 'Qantas航空公司', 'remark': '这是一个应用', 'releasedDate': '2017-04-10 10:27:00', 'version': 'V2.3.5', 'titleImage': '../assets/sample/qantas.png'},
  {'ID': '11111111113', 'name': 'KuickDeal', 'remark': '这是一个应用', 'releasedDate': '', 'version': '', 'titleImage': '../assets/sample/kuickdeal.png'},
  {'ID': '11111111114', 'name': '未命名应用', 'remark': '情不知所以，一往而情深', 'releasedDate': '2017-04-10 10:27:00', 'version': 'V3.8.4', 'titleImage': '../assets/sample/xinjiapoyouzheng.png'},
  {'ID': '11111111115', 'name': 'OCBC Bank', 'remark': '而今识得愁滋味，却道天凉好个秋', 'releasedDate': '2017-04-10 10:27:00', 'version': 'V8.2.6', 'titleImage': '../assets/sample/ocbcback.png'}
])
