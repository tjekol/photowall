export interface Picture {
  _id: string;
  name: string;
  description: string;
  image: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
  };
  createdAt: string;
}
