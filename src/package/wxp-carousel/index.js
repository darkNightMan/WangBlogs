import Carousel from './src'
export default {
  component: Carousel,
  config: {
    comName: '轮播',
    comTag: 'wxp-carousel',
    comAttrTag: 'attr-carousel',
    comIcon: 'el-icon-setting',
    comStyle: {
      background: '#333'
    },
    // props
    propsAttr: {
      imgUrlArr: [
        {
          name: 'u=4180093578,3682525324&fm=193.jpg',
          url: '/public/uploads/u=4180093578,3682525324&fm=193.jpg'
        },
        {
          name: 'u=337418265,3258441697&fm=193.jpg',
          url: '/public/uploads/u=337418265,3258441697&fm=193.jpg'
        }
      ],
      autoplay: true,
      interval: '',
      direction: 'horizontal'
    },
    comAttrEvents: {

    }
  }
}
