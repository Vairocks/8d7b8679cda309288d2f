const rowData = [
  [
    "2021-01-25T10:07:44.000Z",
    "Code Review: Kill the Newsletter [video]",
    "https://www.youtube.com/watch?v=FMTb3Z-QiPY",
    "mfbx9da4",
  ],
  [
    "2021-01-25T10:03:13.000Z",
    "Does Elixir have a Boolean type? [video]",
    "https://www.youtube.com/watch?v=YumpACkQ0vg",
    "AlchemistCamp",
  ],
];

const dataArray = [
  {
    created_at: "2021-01-25T10:07:44.000Z",
    title: "Code Review: Kill the Newsletter [video]",
    url: "https://www.youtube.com/watch?v=FMTb3Z-QiPY",
    author: "mfbx9da4",
  },
  {
    created_at: "2021-01-25T10:03:13.000Z",
    title: "Does Elixir have a Boolean type? [video]",
    url: "https://www.youtube.com/watch?v=YumpACkQ0vg",
    author: "AlchemistCamp",
  },
];

const page = 0;

export const getPayload = () => {
  return { page, dataArray, rowData };
};
