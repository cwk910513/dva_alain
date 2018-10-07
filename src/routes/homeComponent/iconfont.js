import React from 'react';
import { connect } from 'dva';
import { NavBar, Icon, WhiteSpace } from 'antd-mobile';
import styles from '../homeComponent/iconfont.less';

class iconFontComponent extends React.Component{

    // 返回上一级
    leftClick = () => {
        window.location.href = '/#/layout';
    }

    render () {
        let self = this;
        
        return (
            <div className={ styles.container }>
                <NavBar mode="light" icon={ <Icon type="left" /> } onLeftClick={ self.leftClick }>图标</NavBar>
                <WhiteSpace/>
                <div className={ styles.iconContent }>
                    <span>
                        <i className="iconfont icon-tiaoshi"></i>
                        <div>调试</div>
                        <div>.icon-tiaoshi</div>
                    </span>
                    <span>
                        <i className="iconfont icon-changjingguanli"></i>
                        <div>场景管理</div>
                        <div>.icon-changjingguanli</div>
                    </span>
                    <span>
                        <i className="iconfont icon-fenxiangfangshi"></i>
                        <div>分享方式</div>
                        <div>.icon-fenxiangfangshi</div>
                    </span>
                    <span>
                        <i className="iconfont icon-bianji"></i>
                        <div>编辑</div>
                        <div>.icon-bianji</div>
                    </span>
                    <span>
                        <i className="iconfont icon-guanlianshebei"></i>
                        <div>关联设备</div>
                        <div>.icon-guanlianshebei</div>
                    </span>
                    <span>
                        <i className="iconfont icon-guanfangbanben"></i>
                        <div>官方版本</div>
                        <div>.icon-guanfangbanben</div>
                    </span>
                    <span>
                        <i className="iconfont icon-gongnengdingyi"></i>
                        <div>功能定义</div>
                        <div>.icon-gongnengdingyi</div>
                    </span>
                    <span>
                        <i className="iconfont icon-jichuguanli"></i>
                        <div>基础管理</div>
                        <div>.icon-jichuguanli</div>
                    </span>
                    <span>
                        <i className="iconfont icon-jishufuwu"></i>
                        <div>技术服务</div>
                        <div>.icon-jishufuwu</div>
                    </span>
                    <span>
                        <i className="iconfont icon-hezuohuobanmiyueguanli"></i>
                        <div>合作伙伴密钥管理</div>
                        <div>.icon-hezuohuobanmiyueguanli</div>
                    </span>
                    <span>
                        <i className="iconfont icon-ceshishenqing"></i>
                        <div>测试申请</div>
                        <div>.icon-ceshishenqing</div>
                    </span>
                    <span>
                        <i className="iconfont icon-jiedianguanli"></i>
                        <div>节点管理</div>
                        <div>.icon-jiedianguanli</div>
                    </span>
                    <span>
                        <i className="iconfont icon-jinggao"></i>
                        <div>警告</div>
                        <div>.icon-jinggao</div>
                    </span>
                    <span>
                        <i className="iconfont icon-peiwangyindao"></i>
                        <div>配网引导</div>
                        <div>.icon-peiwangyindao</div>
                    </span>
                    <span>
                        <i className="iconfont icon-renjijiaohu"></i>
                        <div>人机交互</div>
                        <div>.icon-renjijiaohu</div>
                    </span>

                    <span>
                        <i className="iconfont icon-shiyongwendang"></i>
                        <div>使用文档</div>
                        <div>.icon-shiyongwendang</div>
                    </span>
                    <span>
                        <i className="iconfont icon-shebeikaifa"></i>
                        <div>设备开发</div>
                        <div>.icon-shebeikaifa</div>
                    </span>
                    <span>
                        <i className="iconfont icon-quanxianshenpi"></i>
                        <div>权限审批</div>
                        <div>.icon-quanxianshenpi</div>
                    </span>
                    <span>
                        <i className="iconfont icon-yishouquan"></i>
                        <div>已授权</div>
                        <div>.icon-yishouquan</div>
                    </span>
                    <span>
                        <i className="iconfont icon-tianshenpi"></i>
                        <div>提案审批</div>
                        <div>.icon-tianshenpi</div>
                    </span>

                    <span>
                        <i className="iconfont icon-shujukanban"></i>
                        <div>数据看板</div>
                        <div>.icon-shujukanban</div>
                    </span>
                    <span>
                        <i className="iconfont icon-yingyongguanli"></i>
                        <div>应用管理</div>
                        <div>.icon-yingyongguanli</div>
                    </span>
                    <span>
                        <i className="iconfont icon-yibiaopan"></i>
                        <div>仪表盘</div>
                        <div>.icon-yibiaopan</div>
                    </span>
                    <span>
                        <i className="iconfont icon-yunyingguanli"></i>
                        <div>运营管理</div>
                        <div>.icon-yunyingguanli</div>
                    </span>
                    <span>
                        <i className="iconfont icon-zhanghaoquanxianguanli"></i>
                        <div>账号权限管理</div>
                        <div>.icon-zhanghaoquanxianguanli</div>
                    </span>

                    <span>
                        <i className="iconfont icon-yuanquyunwei"></i>
                        <div>园区运维</div>
                        <div>.icon-yuanquyunwei</div>
                    </span>
                    <span>
                        <i className="iconfont icon-zhunbeiliangchan"></i>
                        <div>准备量产</div>
                        <div>.icon-zhunbeiliangchan</div>
                    </span>
                    <span>
                        <i className="iconfont icon-jizhanguanli"></i>
                        <div>基站管理</div>
                        <div>.icon-jizhanguanli</div>
                    </span>
                    <span>
                        <i className="iconfont icon-guanbi"></i>
                        <div>关闭</div>
                        <div>.icon-guanbi</div>
                    </span>
                    <span>
                        <i className="iconfont icon-zidingyi"></i>
                        <div>自定义</div>
                        <div>.icon-zidingyi</div>
                    </span>

                    <span>
                        <i className="iconfont icon-icon_loading"></i>
                        <div>icon_loading</div>
                        <div>.icon-icon_loading</div>
                    </span>
                    <span>
                        <i className="iconfont icon-icon_renwujincheng"></i>
                        <div>icon_任务进程</div>
                        <div>.icon-icon_renwujincheng</div>
                    </span>
                    <span>
                        <i className="iconfont icon-icon_rukou"></i>
                        <div>icon_入口</div>
                        <div>.icon-icon_rukou</div>
                    </span>
                    <span>
                        <i className="iconfont icon-icon_yiwenkongxin"></i>
                        <div>icon_疑问空心</div>
                        <div>.icon-icon_yiwenkongxin</div>
                    </span>
                    <span>
                        <i className="iconfont icon-icon_fabu"></i>
                        <div>icon_发布</div>
                        <div>.icon-icon_fabu</div>
                    </span>

                    <span>
                        <i className="iconfont icon-icon_tianjia"></i>
                        <div>icon_添加</div>
                        <div>.icon-icon_tianjia</div>
                    </span>
                    <span>
                        <i className="iconfont icon-icon_yulan"></i>
                        <div>icon_预览</div>
                        <div>.icon-icon_yulan</div>
                    </span>
                    <span>
                        <i className="iconfont icon-icon_zhanghao"></i>
                        <div>icon_账号</div>
                        <div>.icon-icon_zhanghao</div>
                    </span>
                    <span>
                        <i className="iconfont icon-icon_wangye"></i>
                        <div>icon_网页</div>
                        <div>.icon-icon_wangye</div>
                    </span>
                    <span>
                        <i className="iconfont icon-icon_shezhi"></i>
                        <div>icon_设置</div>
                        <div>.icon-icon_shezhi</div>
                    </span>

                    <span>
                        <i className="iconfont icon-icon_baocun"></i>
                        <div>icon_保存</div>
                        <div>.icon-icon_baocun</div>
                    </span>
                    <span>
                        <i className="iconfont icon-icon_yingyongguanli"></i>
                        <div>icon_应用管理</div>
                        <div>.icon-icon_yingyongguanli</div>
                    </span>
                    <span>
                        <i className="iconfont icon-icon_shiyongwendang"></i>
                        <div>icon_使用文档</div>
                        <div>.icon-icon_shiyongwendang</div>
                    </span>
                    <span>
                        <i className="iconfont icon-icon_bangzhuwendang"></i>
                        <div>icon_帮助文档</div>
                        <div>.icon-icon_bangzhuwendang</div>
                    </span>
                    <span>
                        <i className="iconfont icon-biaodanzujian-shurukuang"></i>
                        <div>表单组件-输入框</div>
                        <div>.icon-biaodanzujian-shurukuang</div>
                    </span>

                    <span>
                        <i className="iconfont icon-biaodanzujian-biaoge"></i>
                        <div>表单组件-表格</div>
                        <div>.icon-biaodanzujian-biaoge</div>
                    </span>
                    <span>
                        <i className="iconfont icon-biaodanzujian-xialakuang"></i>
                        <div>表单组件-下拉框</div>
                        <div>.icon-biaodanzujian-xialakuang</div>
                    </span>
                    <span>
                        <i className="iconfont icon-tubiao-bingtu"></i>
                        <div>图表-饼图</div>
                        <div>.icon-tubiao-bingtu</div>
                    </span>
                    <span>
                        <i className="iconfont icon-biaodanzujian-anniu"></i>
                        <div>表单组件-按钮</div>
                        <div>.icon-biaodanzujian-anniu</div>
                    </span>
                    <span>
                        <i className="iconfont icon-gongyezujian-yibiaopan"></i>
                        <div>工业组件-仪表盘</div>
                        <div>.icon-gongyezujian-yibiaopan</div>
                    </span>

                    <span>
                        <i className="iconfont icon-tubiao-qiapian"></i>
                        <div>图表-卡片</div>
                        <div>.icon-tubiao-qiapian</div>
                    </span>
                    <span>
                        <i className="iconfont icon-gongyezujian-zhishideng"></i>
                        <div>工业组件-指示灯</div>
                        <div>.icon-gongyezujian-zhishideng</div>
                    </span>
                    <span>
                        <i className="iconfont icon-tubiao-zhexiantu"></i>
                        <div>图表-折线图</div>
                        <div>.icon-tubiao-zhexiantu</div>
                    </span>
                    <span>
                        <i className="iconfont icon-xingzhuang-juxing"></i>
                        <div>形状-矩形</div>
                        <div>.icon-xingzhuang-juxing</div>
                    </span>
                    <span>
                        <i className="iconfont icon-xingzhuang-jianxing"></i>
                        <div>形状-箭形</div>
                        <div>.icon-xingzhuang-jianxing</div>
                    </span>

                    <span>
                        <i className="iconfont icon-gongyezujian-kaiguan"></i>
                        <div>工业组件-开关</div>
                        <div>.icon-gongyezujian-kaiguan</div>
                    </span>
                    <span>
                        <i className="iconfont icon-tubiao-zhuzhuangtu"></i>
                        <div>图表-柱状图</div>
                        <div>.icon-tubiao-zhuzhuangtu</div>
                    </span>
                    <span>
                        <i className="iconfont icon-xingzhuang-tupian"></i>
                        <div>形状-图片</div>
                        <div>.icon-xingzhuang-tupian</div>
                    </span>
                    <span>
                        <i className="iconfont icon-xingzhuang-wenzi"></i>
                        <div>形状-文字</div>
                        <div>.icon-xingzhuang-wenzi</div>
                    </span>
                    <span>
                        <i className="iconfont icon-xingzhuang-tuoyuanxing"></i>
                        <div>形状-椭圆形</div>
                        <div>.icon-xingzhuang-tuoyuanxing</div>
                    </span>

                    <span>
                        <i className="iconfont icon-xingzhuang-sanjiaoxing"></i>
                        <div>形状-三角形</div>
                        <div>.icon-xingzhuang-sanjiaoxing</div>
                    </span>
                    <span>
                        <i className="iconfont icon-xingzhuang-xingxing"></i>
                        <div>形状-星形</div>
                        <div>.icon-xingzhuang-xingxing</div>
                    </span>
                    <span>
                        <i className="iconfont icon-guize"></i>
                        <div>规则</div>
                        <div>.icon-guize</div>
                    </span>
                    <span>
                        <i className="iconfont icon-shebeiguanli"></i>
                        <div>设备管理</div>
                        <div>.icon-shebeiguanli</div>
                    </span>
                    <span>
                        <i className="iconfont icon-gongnengdingyi1"></i>
                        <div>功能定义</div>
                        <div>.icon-gongnengdingyi1</div>
                    </span>

                    <span>
                        <i className="iconfont icon-jishufuwu1"></i>
                        <div>技术服务</div>
                        <div>.icon-jishufuwu1</div>
                    </span>
                    <span>
                        <i className="iconfont icon-zuzhixiaxia"></i>
                        <div>组织下辖</div>
                        <div>.icon-zuzhixiaxia</div>
                    </span>
                    <span>
                        <i className="iconfont icon-zuzhizhankai"></i>
                        <div>组织展开</div>
                        <div>.icon-zuzhizhankai</div>
                    </span>
                    <span>
                        <i className="iconfont icon-zuzhiqunzu"></i>
                        <div>组织群组</div>
                        <div>.icon-zuzhiqunzu</div>
                    </span>
                    <span>
                        <i className="iconfont icon-dakai"></i>
                        <div>打开</div>
                        <div>.icon-dakai</div>
                    </span>

                    <span>
                        <i className="iconfont icon-yingwen"></i>
                        <div>英文</div>
                        <div>.icon-yingwen</div>
                    </span>
                    <span>
                        <i className="iconfont icon-zhongwen"></i>
                        <div>中文</div>
                        <div>.icon-zhongwen</div>
                    </span>
                    <span>
                        <i className="iconfont icon-miwen"></i>
                        <div>密文</div>
                        <div>.icon-miwen</div>
                    </span>
                    <span>
                        <i className="iconfont icon-xianhao"></i>
                        <div>显号</div>
                        <div>.icon-xianhao</div>
                    </span>
                    <span>
                        <i className="iconfont icon-kongxinduigou"></i>
                        <div>空心对勾</div>
                        <div>.icon-kongxinduigou</div>
                    </span>

                    <span>
                        <i className="iconfont icon-huixingzhen"></i>
                        <div>回形针</div>
                        <div>.icon-huixingzhen</div>
                    </span>
                    <span>
                        <i className="iconfont icon-duigou"></i>
                        <div>对勾</div>
                        <div>.icon-duigou</div>
                    </span>
                    <span>
                        <i className="iconfont icon-xiayibu"></i>
                        <div>下一步</div>
                        <div>.icon-xiayibu</div>
                    </span>
                    <span>
                        <i className="iconfont icon-shangyibu"></i>
                        <div>上一步</div>
                        <div>.icon-shangyibu</div>
                    </span>
                    <span>
                        <i className="iconfont icon-kongjianxuanzhong"></i>
                        <div>控件选中</div>
                        <div>.icon-kongjianxuanzhong</div>
                    </span>

                    <span>
                        <i className="iconfont icon-kongjianweixuan"></i>
                        <div>控件未选</div>
                        <div>.icon-kongjianweixuan</div>
                    </span>
                    <span>
                        <i className="iconfont icon-kongjianyixuan"></i>
                        <div>控件已选</div>
                        <div>.icon-kongjianyixuan</div>
                    </span>
                    <span>
                        <i className="iconfont icon--ludeng"></i>
                        <div>0118-路灯</div>
                        <div>.icon--ludeng</div>
                    </span>
                    <span>
                        <i className="iconfont icon--diangan"></i>
                        <div>0117- 电杆</div>
                        <div>.icon--diangan</div>
                    </span>
                    <span>
                        <i className="iconfont icon-rongxuejirongjiechi"></i>
                        <div>0309融雪剂溶解池</div>
                        <div>.icon-rongxuejirongjiechi</div>
                    </span>

                    <span>
                        <i className="iconfont icon-lubiantingchechang"></i>
                        <div>0215路边停车场</div>
                        <div>.icon-lubiantingchechang</div>
                    </span>
                    <span>
                        <i className="iconfont icon--lumingpai"></i>
                        <div>0213-路名牌</div>
                        <div>.icon--lumingpai</div>
                    </span>
                    <span>
                        <i className="iconfont icon-jietouzuoyi"></i>
                        <div>0407街头座椅</div>
                        <div>.icon-jietouzuoyi</div>
                    </span>
                    <span>
                        <i className="iconfont icon--zhongdaweixian"></i>
                        <div>0601-重大危险</div>
                        <div>.icon--zhongdaweixian</div>
                    </span>
                    <span>
                        <i className="iconfont icon--jiaotongbiaozhipai"></i>
                        <div>0209-交通标志牌</div>
                        <div>.icon--jiaotongbiaozhipai</div>
                    </span>

                    <span>
                        <i className="iconfont icon-gongcezhishipai"></i>
                        <div>0303公厕指示牌</div>
                        <div>.icon-gongcezhishipai</div>
                    </span>
                    <span>
                        <i className="iconfont icon-fangkuai"></i>
                        <div>方块+</div>
                        <div>.icon-fangkuai</div>
                    </span>
                    <span>
                        <i className="iconfont icon-fangkuai-"></i>
                        <div>方块-</div>
                        <div>.icon-fangkuai-</div>
                    </span>
                    <span>
                        <i className="iconfont icon-shuaxin"></i>
                        <div>刷新</div>
                        <div>.icon-shuaxin</div>
                    </span>
                    <span>
                        <i className="iconfont icon-xxx"></i>
                        <div>保存</div>
                        <div>.icon-xxx</div>
                    </span>

                    <span>
                        <i className="iconfont icon-fabu"></i>
                        <div>发布</div>
                        <div>.icon-fabu</div>
                    </span>
                    <span>
                        <i className="iconfont icon-xiayibu1"></i>
                        <div>下一步</div>
                        <div>.icon-xiayibu1</div>
                    </span>
                    <span>
                        <i className="iconfont icon-shangyibu1"></i>
                        <div>上一步</div>
                        <div>.icon-shangyibu1</div>
                    </span>
                    <span>
                        <i className="iconfont icon-xiangxiazhanhang"></i>
                        <div>向下占行</div>
                        <div>.icon-xiangxiazhanhang</div>
                    </span>
                    <span>
                        <i className="iconfont icon-xiangshangzhanhang"></i>
                        <div>向上占行</div>
                        <div>.icon-xiangshangzhanhang</div>
                    </span>

                    <span>
                        <i className="iconfont icon-tupianjiazaishibai"></i>
                        <div>图片加载失败</div>
                        <div>.icon-tupianjiazaishibai</div>
                    </span>
                    <span>
                        <i className="iconfont icon-fuwudiqiu"></i>
                        <div>服务地球</div>
                        <div>.icon-fuwudiqiu</div>
                    </span>
                    <span>
                        <i className="iconfont icon-suoxiao"></i>
                        <div>缩小</div>
                        <div>.icon-suoxiao</div>
                    </span>
                    <span>
                        <i className="iconfont icon-fangda"></i>
                        <div>放大</div>
                        <div>.icon-fangda</div>
                    </span>
                    <span>
                        <i className="iconfont icon-huanyuanhuabu"></i>
                        <div>还原画布</div>
                        <div>.icon-huanyuanhuabu</div>
                    </span>

                    <span>
                        <i className="iconfont icon-quanping"></i>
                        <div>全屏</div>
                        <div>.icon-quanping</div>
                    </span>
                    <span>
                        <i className="iconfont icon-biaodanzujian-biaoge1"></i>
                        <div>表单组件-表格</div>
                        <div>.icon-biaodanzujian-biaoge1</div>
                    </span>
                    <span>
                        <i className="iconfont icon-APIshuchu"></i>
                        <div>API输出</div>
                        <div>.icon-APIshuchu</div>
                    </span>
                    <span>
                        <i className="iconfont icon-APIjieru"></i>
                        <div>API接入</div>
                        <div>.icon-APIjieru</div>
                    </span>
                    <span>
                        <i className="iconfont icon-wenjianjia"></i>
                        <div>文件夹</div>
                        <div>.icon-wenjianjia</div>
                    </span>

                    <span>
                        <i className="iconfont icon-DOC"></i>
                        <div>DOC</div>
                        <div>.icon-DOC</div>
                    </span>
                    <span>
                        <i className="iconfont icon-BMP"></i>
                        <div>BMP</div>
                        <div>.icon-BMP</div>
                    </span>
                    <span>
                        <i className="iconfont icon-GIF"></i>
                        <div>GIF</div>
                        <div>.icon-GIF</div>
                    </span>
                    <span>
                        <i className="iconfont icon-JPG"></i>
                        <div>JPG</div>
                        <div>.icon-JPG</div>
                    </span>
                    <span>
                        <i className="iconfont icon-PNG"></i>
                        <div>PNG</div>
                        <div>.icon-PNG</div>
                    </span>

                    <span>
                        <i className="iconfont icon-weizhigeshi"></i>
                        <div>未知格式</div>
                        <div>.icon-weizhigeshi</div>
                    </span>
                    <span>
                        <i className="iconfont icon-gengduo"></i>
                        <div>更多</div>
                        <div>.icon-gengduo</div>
                    </span>
                    <span>
                        <i className="iconfont icon-yunduanxiazai"></i>
                        <div>云端下载</div>
                        <div>.icon-yunduanxiazai</div>
                    </span>
                    <span>
                        <i className="iconfont icon-yunduanshangchuan"></i>
                        <div>云端上传</div>
                        <div>.icon-yunduanshangchuan</div>
                    </span>
                    <span>
                        <i className="iconfont icon-dian"></i>
                        <div>点</div>
                        <div>.icon-dian</div>
                    </span>

                    <span>
                        <i className="iconfont icon-mian"></i>
                        <div>面</div>
                        <div>.icon-mian</div>
                    </span>
                    <span>
                        <i className="iconfont icon-xian"></i>
                        <div>线</div>
                        <div>.icon-xian</div>
                    </span>
                    <span>
                        <i className="iconfont icon-shebeizhuangtai"></i>
                        <div>设备状态</div>
                        <div>.icon-shebeizhuangtai</div>
                    </span>
                    <span>
                        <i className="iconfont icon-fenzuguanli"></i>
                        <div>分组管理</div>
                        <div>.icon-fenzuguanli</div>
                    </span>
                    <span>
                        <i className="iconfont icon-kuaisubianpai"></i>
                        <div>快速编排</div>
                        <div>.icon-kuaisubianpai</div>
                    </span>

                    <span>
                        <i className="iconfont icon-APPkaifa"></i>
                        <div>APP开发</div>
                        <div>.icon-APPkaifa</div>
                    </span>
                    <span>
                        <i className="iconfont icon-wentijieda"></i>
                        <div>问题解答</div>
                        <div>.icon-wentijieda</div>
                    </span>
                    <span>
                        <i className="iconfont icon-kefu"></i>
                        <div>客服</div>
                        <div>.icon-kefu</div>
                    </span>
                    <span>
                        <i className="iconfont icon-ruanjiankaifabao"></i>
                        <div>软件开发包</div>
                        <div>.icon-ruanjiankaifabao</div>
                    </span>
                    <span>
                        <i className="iconfont icon-sousuobianxiao"></i>
                        <div>搜索变小</div>
                        <div>.icon-sousuobianxiao</div>
                    </span>

                    <span>
                        <i className="iconfont icon-sousuofangda"></i>
                        <div>搜索放大</div>
                        <div>.icon-sousuofangda</div>
                    </span>
                    <span>
                        <i className="iconfont icon-dingwei"></i>
                        <div>定位</div>
                        <div>.icon-dingwei</div>
                    </span>
                    <span>
                        <i className="iconfont icon-wumoxing"></i>
                        <div>物模型</div>
                        <div>.icon-wumoxing</div>
                    </span>
                    <span>
                        <i className="iconfont icon-gaojing"></i>
                        <div>告警</div>
                        <div>.icon-gaojing</div>
                    </span>
                    <span>
                        <i className="iconfont icon-renwujincheng"></i>
                        <div>任务进程</div>
                        <div>.icon-renwujincheng</div>
                    </span>

                    <span>
                        <i className="iconfont icon-xiaoxitongzhi"></i>
                        <div>消息通知</div>
                        <div>.icon-xiaoxitongzhi</div>
                    </span>
                    <span>
                        <i className="iconfont icon-youhui"></i>
                        <div>优惠</div>
                        <div>.icon-youhui</div>
                    </span>
                    <span>
                        <i className="iconfont icon-gaojing1"></i>
                        <div>告警</div>
                        <div>.icon-gaojing1</div>
                    </span>
                    <span>
                        <i className="iconfont icon-zhihangfankui"></i>
                        <div>执行反馈</div>
                        <div>.icon-zhihangfankui</div>
                    </span>
                    <span>
                        <i className="iconfont icon-gongdanqueren"></i>
                        <div>工单确认</div>
                        <div>.icon-gongdanqueren</div>
                    </span>

                    <span>
                        <i className="iconfont icon-guangbo"></i>
                        <div>广播</div>
                        <div>.icon-guangbo</div>
                    </span>
                    <span>
                        <i className="iconfont icon-gongdan"></i>
                        <div>工单</div>
                        <div>.icon-gongdan</div>
                    </span>
                    <span>
                        <i className="iconfont icon-xiaoxi"></i>
                        <div>消息</div>
                        <div>.icon-xiaoxi</div>
                    </span>
                    <span>
                        <i className="iconfont icon-xinhao"></i>
                        <div>信号</div>
                        <div>.icon-xinhao</div>
                    </span>
                    <span>
                        <i className="iconfont icon-lanya"></i>
                        <div>蓝牙</div>
                        <div>.icon-lanya</div>
                    </span>

                    <span>
                        <i className="iconfont icon-Wi-Fi"></i>
                        <div>Wi-Fi</div>
                        <div>.icon-Wi-Fi</div>
                    </span>
                    <span>
                        <i className="iconfont icon-chaxun"></i>
                        <div>查询</div>
                        <div>.icon-chaxun</div>
                    </span>
                    <span>
                        <i className="iconfont icon-dianbiao"></i>
                        <div>电表</div>
                        <div>.icon-dianbiao</div>
                    </span>
                    <span>
                        <i className="iconfont icon-anquan"></i>
                        <div>安全</div>
                        <div>.icon-anquan</div>
                    </span>
                    <span>
                        <i className="iconfont icon-daibanshixiang"></i>
                        <div>待办事项</div>
                        <div>.icon-daibanshixiang</div>
                    </span>

                    <span>
                        <i className="iconfont icon-bingxiang"></i>
                        <div>冰箱</div>
                        <div>.icon-bingxiang</div>
                    </span>
                    <span>
                        <i className="iconfont icon-fanshe"></i>
                        <div>反射</div>
                        <div>.icon-fanshe</div>
                    </span>
                    <span>
                        <i className="iconfont icon-fengche"></i>
                        <div>风车</div>
                        <div>.icon-fengche</div>
                    </span>
                    <span>
                        <i className="iconfont icon-guandao"></i>
                        <div>管道</div>
                        <div>.icon-guandao</div>
                    </span>
                    <span>
                        <i className="iconfont icon-guize1"></i>
                        <div>规则</div>
                        <div>.icon-guize1</div>
                    </span>
                    <span>
                        <i className="iconfont icon-guizeyinqing"></i>
                        <div>规则引擎</div>
                        <div>.icon-guizeyinqing</div>
                    </span>

                    <span>
                        <i className="iconfont icon-huowudui"></i>
                        <div>货物堆</div>
                        <div>.icon-huowudui</div>
                    </span>
                    <span>
                        <i className="iconfont icon-jianceqi"></i>
                        <div>检测器</div>
                        <div>.icon-jianceqi</div>
                    </span>
                    <span>
                        <i className="iconfont icon-jinggai"></i>
                        <div>井盖</div>
                        <div>.icon-jinggai</div>
                    </span>
                    <span>
                        <i className="iconfont icon-liujisuan"></i>
                        <div>流计算</div>
                        <div>.icon-liujisuan</div>
                    </span>
                    <span>
                        <i className="iconfont icon-hanshu"></i>
                        <div>函数</div>
                        <div>.icon-hanshu</div>
                    </span>

                    <span>
                        <i className="iconfont icon-lianjieliu"></i>
                        <div>连接流</div>
                        <div>.icon-lianjieliu</div>
                    </span>
                    <span>
                        <i className="iconfont icon-ludeng"></i>
                        <div>路灯</div>
                        <div>.icon-ludeng</div>
                    </span>
                    <span>
                        <i className="iconfont icon-shexiangji"></i>
                        <div>摄像机</div>
                        <div>.icon-shexiangji</div>
                    </span>
                    <span>
                        <i className="iconfont icon-rentijiance"></i>
                        <div>人体检测</div>
                        <div>.icon-rentijiance</div>
                    </span>
                    <span>
                        <i className="iconfont icon-moshubang"></i>
                        <div>魔术棒</div>
                        <div>.icon-moshubang</div>
                    </span>

                    <span>
                        <i className="iconfont icon-shujuwajue"></i>
                        <div>数据挖掘</div>
                        <div>.icon-shujuwajue</div>
                    </span>
                    <span>
                        <i className="iconfont icon-wangguan"></i>
                        <div>网关</div>
                        <div>.icon-wangguan</div>
                    </span>
                    <span>
                        <i className="iconfont icon-chucun"></i>
                        <div>储存</div>
                        <div>.icon-chucun</div>
                    </span>
                    <span>
                        <i className="iconfont icon-wuguan"></i>
                        <div>AI</div>
                        <div>.icon-wuguan</div>
                    </span>
                    <span>
                        <i className="iconfont icon-yunduanshuaxin"></i>
                        <div>云端刷新</div>
                        <div>.icon-yunduanshuaxin</div>
                    </span>

                    <span>
                        <i className="iconfont icon-yunhang"></i>
                        <div>运行</div>
                        <div>.icon-yunhang</div>
                    </span>
                    <span>
                        <i className="iconfont icon-luyouqi"></i>
                        <div>路由器</div>
                        <div>.icon-luyouqi</div>
                    </span>
                    <span>
                        <i className="iconfont icon-bug"></i>
                        <div>bug</div>
                        <div>.icon-bug</div>
                    </span>
                    <span>
                        <i className="iconfont icon-bagetcun"></i>
                        <div>get</div>
                        <div>.icon-get</div>
                    </span>
                    <span>
                        <i className="iconfont icon-PIR"></i>
                        <div>PIR</div>
                        <div>.icon-PIR</div>
                    </span>

                    <span>
                        <i className="iconfont icon-zhexiantu"></i>
                        <div>折线图</div>
                        <div>.icon-zhexiantu</div>
                    </span>
                    <span>
                        <i className="iconfont icon-shuibiao"></i>
                        <div>水表</div>
                        <div>.icon-shuibiao</div>
                    </span>
                    <span>
                        <i className="iconfont icon-js"></i>
                        <div>js</div>
                        <div>.icon-js</div>
                    </span>
                    <span>
                        <i className="iconfont icon-zihangche"></i>
                        <div>自行车</div>
                        <div>.icon-zihangche</div>
                    </span>
                    <span>
                        <i className="iconfont icon-liebiao"></i>
                        <div>列表</div>
                        <div>.icon-liebiao</div>
                    </span>

                    <span>
                        <i className="iconfont icon-qichedingwei"></i>
                        <div>汽车定位</div>
                        <div>.icon-qichedingwei</div>
                    </span>
                    <span>
                        <i className="iconfont icon-dici"></i>
                        <div>地磁</div>
                        <div>.icon-dici</div>
                    </span>
                    <span>
                        <i className="iconfont icon-mysql"></i>
                        <div>mysql</div>
                        <div>.icon-mysql</div>
                    </span>
                    <span>
                        <i className="iconfont icon-qiche"></i>
                        <div>qiche</div>
                        <div>.icon-qiche</div>
                    </span>
                    <span>
                        <i className="iconfont icon-shenjing"></i>
                        <div>神经</div>
                        <div>.icon-shenjing</div>
                    </span>

                    <span>
                        <i className="iconfont icon-chengshi"></i>
                        <div>城市</div>
                        <div>.icon-chengshi</div>
                    </span>
                    <span>
                        <i className="iconfont icon-menci"></i>
                        <div>门磁</div>
                        <div>.icon-menci</div>
                    </span>
                    <span>
                        <i className="iconfont icon-chazuo"></i>
                        <div>插座</div>
                        <div>.icon-chazuo</div>
                    </span>
                    <span>
                        <i className="iconfont icon-ranqijianceqi"></i>
                        <div>燃气监测器</div>
                        <div>.icon-ranqijianceqi</div>
                    </span>
                    <span>
                        <i className="iconfont icon-kaiguan"></i>
                        <div>开关</div>
                        <div>.icon-kaiguan</div>
                    </span>

                    <span>
                        <i className="iconfont icon-chatou"></i>
                        <div>插头</div>
                        <div>.icon-chatou</div>
                    </span>
                    <span>
                        <i className="iconfont icon-xiyiji"></i>
                        <div>洗衣机</div>
                        <div>.icon-xiyiji</div>
                    </span>
                    <span>
                        <i className="iconfont icon-yijiankaiguan"></i>
                        <div>一键开关</div>
                        <div>.icon-yijiankaiguan</div>
                    </span>
                    <span>
                        <i className="iconfont icon-yanwubaojingqi"></i>
                        <div>烟雾报警器</div>
                        <div>.icon-yanwubaojingqi</div>
                    </span>
                    <span>
                        <i className="iconfont icon-wuxiandianbo"></i>
                        <div>无线电波</div>
                        <div>.icon-wuxiandianbo</div>
                    </span>

                    <span>
                        <i className="iconfont icon-fuzhi"></i>
                        <div>复制</div>
                        <div>.icon-fuzhi</div>
                    </span>
                    <span>
                        <i className="iconfont icon-shanchu"></i>
                        <div>删除</div>
                        <div>.icon-shanchu</div>
                    </span>
                </div>
            </div>
        );
    }
}

export default connect()(iconFontComponent);
