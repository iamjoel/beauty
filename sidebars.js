const sidebars = {
  // https://docusaurus.io/zh-CN/docs/sidebar/autogenerated
  city: [
    {
      type: 'doc',
      id: 'city/readme',
    },
    {
      type: 'doc',
      label: '槟城',
      id: 'city/penang/intro',
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
