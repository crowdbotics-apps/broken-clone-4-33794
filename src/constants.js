export const SORT_BY_OPTIONS = [
    {
      label: 'Title - A to Z',
      value: JSON.stringify({
        order_by: 'ASC',
        sort_by: 'title'
      })
    }, {
      label: 'Title - Z to A',
      value: JSON.stringify({
        order_by: 'DESC',
        sort_by: 'title'
      })
    },{
      label: 'Price - Low to High',
      value: JSON.stringify({
        order_by: 'ASC',
        sort_by: 'maxPrice',
      })
    }, {
      label: 'Price - High to Low',
      value: JSON.stringify({
        order_by: 'DESC',
        sort_by: 'maxPrice'
      })
    }, {
      label: 'Arrival Date - Old to New',
      value: JSON.stringify({
        order_by: 'ASC',
        sort_by: 'productCreatedAt'
      })
    }, {
      label: 'Arrival Date - New to Old',
      value: JSON.stringify({
        order_by: 'DESC',
        sort_by: 'productCreatedAt'
      }),
    }
  ];
  