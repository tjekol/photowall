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
      name: 'description',
      type: 'array',
      title: 'Description',
      of: [
        {
          type: 'block',
        }
      ],
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: { hotspot: true },
      fiels: [
        {
        name: 'alt',
        title: 'Alt',
        type: 'string',
        }
      ]
    }
  ]
}
