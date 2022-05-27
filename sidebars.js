const sidebars = {
  // https://docusaurus.io/zh-CN/docs/sidebar/autogenerated
  city: [
    {
      type: 'doc',
      label: '北京',
      id: 'city/asia/china/beijing/intro',
    },
    {
      type: 'doc',
      label: '纽约',
      id: 'city/america/america/new-york/intro',
    },
    {
      type: 'doc',
      label: '槟城',
      id: 'city/asia/malaysia/penang/intro',
    },
    {
      type: 'doc',
      label: '资源',
      id: 'city/readme',
    }
  ],
  word: [
    {
      type: 'category',
      label: '文',
      items: [
        {
          type: 'autogenerated',
          dirName: 'word',
        },
      ]
    }
    
  ],
};

module.exports = sidebars;
