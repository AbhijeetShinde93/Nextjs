const blogdata = [
  {
    data: [
      {
        type: "articles",
        id: "1",
        attributes: {
          title: "JSON:API paints my bikeshed!",
          body: "The shortest article. Ever.",
        },
        relationships: {
          author: {
            data: { id: "42", type: "people" },
          },
        },
      },
      {
        type: "articles",
        id: "2",
        attributes: {
          title: "Dummy bikeshed!",
          body: "The shortest article. Ever.",
        },
        relationships: {
          author: {
            data: { id: "42", type: "people" },
          },
        },
      },
    ],
  },
];
