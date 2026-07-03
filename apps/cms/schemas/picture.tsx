export default {
  name: 'picture',
  type: 'document',
  title: 'Picture',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'name_tag',
      type: 'string',
      title: 'Name tag',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {hotspot: true},
      fiels: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        },
      ],
    },
  ],
}
