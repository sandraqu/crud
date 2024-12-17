import { rest } from "msw";

let users = [
  {
    id: 90000,
    maritalStatusId: 1,
    employment: {
      employer: "Bank of America",
      position: "Teller",
      yearsEmployedId: 3,
      street1: "35025 Garret Pine",
      city: "North Rowenaville",
      stateId: 5,
      postalCode: "90066",
    },
    firstName: "Benjamin",
    lastName: "D0e",
    legalName: "Benjamin D0e",
    dob: "1963-04-22",
    emails: [{ id: 90000, typeId: 1, email: "iklas@oneadvisory.co" }],
    phones: [{ id: 90000, typeId: 3, countryCodeID: 1, number: "1112223344" }],
    addresses: [
      {
        id: 90000,
        typeId: 1,
        street1: "79029 Corene Meadow",
        city: "Homenickfurt",
        stateId: 5,
        postalCode: "90066",
        countryId: 1,
      },
    ],
    finProfile: {
      doesBackupWithholdingApply: false,
      federalTaxBracketPercent: 28.3,
      annualIncomeId: 1,
      liquidNetWorthId: 3,
      totalNetWorthId: 3,
    },
    disclosures: {
      isAffiliatedExchangeOrFinra: false,
      isPoliticallyExposed: false,
      isControlPerson: false,
    },
  },
  {
    id: 100000,
    maritalStatusId: 1,
    employment: {
      employer: "bank of america",
      position: "teller",
      yearsEmployedId: 5,
      street1: "Jackson Ct",
      city: "New Deal",
      stateId: 5,
      postalCode: "Nevada",
    },
    firstName: "Ella",
    lastName: "Jackson0",
    legalName: "Ella Jackson0",
    dob: "1974-10-11",
    emails: [{ id: 100000, typeId: 1, email: "iklas@oneadvisory.co" }],
    phones: [
      {
        id: 100000,
        typeId: 3,
        countryCodeID: 1,
        number: "+421 656 1172 02 1 0",
      },
    ],
    addresses: [
      {
        id: 100000,
        typeId: 1,
        street1: "Wilson Pl",
        city: "Berkhamsted",
        stateId: 5,
        postalCode: "90066",
        countryId: 1,
      },
    ],
    finProfile: {
      annualIncomeId: 1,
      liquidNetWorthId: 3,
      totalNetWorthId: 3,
    },
    disclosures: {
      isAffiliatedExchangeOrFinra: false,
      isPoliticallyExposed: false,
      isControlPerson: false,
    },
  },
  {
    id: 100001,
    firstName: "Alexander",
    lastName: "Martinez",
    legalName: "",
    emails: [{ id: 100001, typeId: 1, email: "iklas@oneadvisory.co" }],
    phones: [
      {
        id: 100001,
        typeId: 3,
        countryCodeID: 1,
        number: "+1 284 894 0734955",
      },
    ],
  },
  {
    id: 100002,
    firstName: "Ethan",
    lastName: "Thomas0",
    legalName: "Ethan Thomas0",
    emails: [{ id: 100002, typeId: 1, email: "iklas@oneadvisory.co" }],
    phones: [
      {
        id: 100002,
        typeId: 3,
        countryCodeID: 1,
        number: "+1 550 7984 26 2 319",
      },
    ],
    addresses: [
      {
        id: 100001,
        typeId: 1,
        street1: "Washington Trl",
        city: "Baldock",
        stateId: 5,
        postalCode: "90066",
        countryId: 1,
      },
    ],
  },
  {
    id: 100003,
    maritalStatusId: 4,
    employment: {
      employer: "bank of america",
      position: "teller",
      yearsEmployedId: 4,
      street1: "Jefferson Ter",
      city: "San Martin",
      stateId: 5,
      postalCode: "Ohio",
    },
    firstName: "Abigail",
    lastName: "Brown0",
    legalName: "Abigail Brown0",
    dob: "1968-11-13",
    emails: [{ id: 100003, typeId: 1, email: "iklas@oneadvisory.co" }],
    phones: [
      {
        id: 100003,
        typeId: 3,
        countryCodeID: 1,
        number: "+598 1 1 78221 092 5",
      },
    ],
    addresses: [
      {
        id: 100002,
        typeId: 1,
        street1: "Jackson St",
        city: "Plympton",
        stateId: 5,
        postalCode: "90066",
        countryId: 1,
      },
    ],
    finProfile: {
      annualIncomeId: 1,
      liquidNetWorthId: 3,
      totalNetWorthId: 3,
    },
    disclosures: {
      isAffiliatedExchangeOrFinra: false,
      isPoliticallyExposed: false,
      isControlPerson: false,
    },
  },
  {
    id: 100004,
    firstName: "Olivia",
    lastName: "Anderson",
    legalName: "",
    emails: [{ id: 100004, typeId: 1, email: "iklas@oneadvisory.co" }],
    phones: [
      {
        id: 100004,
        typeId: 3,
        countryCodeID: 1,
        number: "+423 883 90878831",
      },
    ],
  },
  {
    id: 100005,
    firstName: "Andrew",
    lastName: "Garcia0",
    legalName: "Andrew Garcia0",
    emails: [{ id: 100005, typeId: 1, email: "iklas@oneadvisory.co" }],
    phones: [
      {
        id: 100005,
        typeId: 3,
        countryCodeID: 1,
        number: "+32 196 74 903 1021",
      },
    ],
    addresses: [
      {
        id: 100003,
        typeId: 1,
        street1: "Madison Pl",
        city: "Brandwell",
        stateId: 5,
        postalCode: "90066",
        countryId: 1,
      },
    ],
  },
  {
    id: 100006,
    maritalStatusId: 3,
    employment: {
      employer: "bank of america",
      position: "teller",
      yearsEmployedId: 4,
      street1: "Washington Rd",
      city: "Lucien",
      stateId: 5,
      postalCode: "Wisconsin",
    },
    firstName: "Chloe",
    lastName: "Johnson0",
    legalName: "Chloe Johnson0",
    dob: "1978-10-19",
    emails: [{ id: 100006, typeId: 1, email: "iklas@oneadvisory.co" }],
    phones: [
      {
        id: 100006,
        typeId: 3,
        countryCodeID: 1,
        number: "+216 724 75998398",
      },
    ],
    addresses: [
      {
        id: 100004,
        typeId: 1,
        street1: "Wilson St",
        city: "Ransom Canyon",
        stateId: 5,
        postalCode: "90066",
        countryId: 1,
      },
    ],
    finProfile: {
      annualIncomeId: 1,
      liquidNetWorthId: 3,
      totalNetWorthId: 3,
    },
    disclosures: {
      isAffiliatedExchangeOrFinra: false,
      isPoliticallyExposed: false,
      isControlPerson: false,
    },
  },
  {
    id: 100007,
    firstName: "James",
    lastName: "Moore",
    legalName: "",
    emails: [{ id: 100007, typeId: 1, email: "iklas@oneadvisory.co" }],
    phones: [
      {
        id: 100007,
        typeId: 3,
        countryCodeID: 1,
        number: "+994 5 3741810736",
      },
    ],
  },
  {
    id: 100008,
    firstName: "Noah",
    lastName: "Brown0",
    legalName: "Noah Brown0",
    emails: [{ id: 100008, typeId: 1, email: "iklas@oneadvisory.co" }],
    phones: [
      {
        id: 100008,
        typeId: 3,
        countryCodeID: 1,
        number: "+216 997 70358 6 94",
      },
    ],
    addresses: [
      {
        id: 100005,
        typeId: 1,
        street1: "Jefferson Circle",
        city: "Campden",
        stateId: 5,
        postalCode: "90066",
        countryId: 1,
      },
    ],
  },
  {
    id: 100009,
    maritalStatusId: 3,
    employment: {
      employer: "bank of america",
      position: "teller",
      yearsEmployedId: 4,
      street1: "Wilson Trl",
      city: "Burrton",
      stateId: 5,
      postalCode: "Louisiana",
    },
    firstName: "Liam",
    lastName: "White0",
    legalName: "Liam White0",
    dob: "1978-10-25",
    emails: [{ id: 100009, typeId: 1, email: "iklas@oneadvisory.co" }],
    phones: [
      {
        id: 100009,
        typeId: 3,
        countryCodeID: 1,
        number: "+265 26 089 1902 35",
      },
    ],
    addresses: [
      {
        id: 100006,
        typeId: 1,
        street1: "Wilson St",
        city: "Ransom Canyon",
        stateId: 5,
        postalCode: "90066",
        countryId: 1,
      },
    ],
    finProfile: {
      annualIncomeId: 1,
      liquidNetWorthId: 3,
      totalNetWorthId: 3,
    },
    disclosures: {
      isAffiliatedExchangeOrFinra: false,
      isPoliticallyExposed: false,
      isControlPerson: false,
    },
  },
  {
    id: 100010,
    firstName: "Benjamin",
    lastName: "Jackson",
    legalName: "",
    emails: [{ id: 100010, typeId: 1, email: "iklas@oneadvisory.co" }],
    phones: [
      {
        id: 100010,
        typeId: 3,
        countryCodeID: 1,
        number: "+240 581 98013808",
      },
    ],
  },
  {
    id: 100011,
    firstName: "Andrew",
    lastName: "Smith0",
    legalName: "Andrew Smith0",
    emails: [{ id: 100011, typeId: 1, email: "iklas@oneadvisory.co" }],
    phones: [
      {
        id: 100011,
        typeId: 3,
        countryCodeID: 1,
        number: "+237 670 96216 70 8",
      },
    ],
    addresses: [
      {
        id: 100007,
        typeId: 1,
        street1: "Jefferson Rd",
        city: "Plympton",
        stateId: 5,
        postalCode: "90066",
        countryId: 1,
      },
    ],
  },
  {
    id: 100012,
    maritalStatusId: 1,
    employment: {
      employer: "bank of america",
      position: "teller",
      yearsEmployedId: 5,
      street1: "Madison Ct",
      city: "Newstead",
      stateId: 5,
      postalCode: "Idaho",
    },
    firstName: "Chloe",
    lastName: "Miller0",
    legalName: "Chloe Miller0",
    dob: "1979-12-22",
    emails: [{ id: 100012, typeId: 1, email: "iklas@oneadvisory.co" }],
    phones: [
      {
        id: 100012,
        typeId: 3,
        countryCodeID: 1,
        number: "+51 3 611464319 45",
      },
    ],
    addresses: [
      {
        id: 100008,
        typeId: 1,
        street1: "Franklin Ct",
        city: "Plympton",
        stateId: 5,
        postalCode: "90066",
        countryId: 1,
      },
    ],
    finProfile: {
      annualIncomeId: 1,
      liquidNetWorthId: 3,
      totalNetWorthId: 3,
    },
    disclosures: {
      isAffiliatedExchangeOrFinra: false,
      isPoliticallyExposed: false,
      isControlPerson: false,
    },
  },
  {
    id: 100013,
    firstName: "Aiden",
    lastName: "Thomas",
    legalName: "",
    emails: [{ id: 100013, typeId: 1, email: "iklas@oneadvisory.co" }],
    phones: [
      {
        id: 100013,
        typeId: 3,
        countryCodeID: 1,
        number: "+590 31 17 006 2 97 7",
      },
    ],
  },
  {
    id: 100014,
    firstName: "Anthony",
    lastName: "Jones0",
    legalName: "Anthony Jones0",
    emails: [{ id: 100014, typeId: 1, email: "iklas@oneadvisory.co" }],
    phones: [
      {
        id: 100014,
        typeId: 3,
        countryCodeID: 1,
        number: "+594 304 029021 97",
      },
    ],
    addresses: [
      {
        id: 100009,
        typeId: 1,
        street1: "Lincoln Rdg",
        city: "Newstead",
        stateId: 5,
        postalCode: "90066",
        countryId: 1,
      },
    ],
  },
];

export const handlers = [
  rest.get("/api/v1/users", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(users));
  }),
  rest.post("/api/v1/users", async (req, res, ctx) => {
    const newUser = await req.json();
    newUser.id = users.length + 1;
    users.push(newUser);
    return res(ctx.status(201), ctx.json(newUser));
  }),
  rest.put("/api/v1/users/:id", async (req, res, ctx) => {
    const id = Number.parseInt(req.params.id, 10);
    const body = await req.json();
    const updatedUser = { ...body };
    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
      console.log("we are having a problem", userIndex);
      return res(ctx.status(404));
    }
    users[userIndex] = updatedUser;

    return res(ctx.status(204));
  }),
  rest.delete("/api/v1/users/:id", (req, res, ctx) => {
    const id = Number.parseInt(req.params.id, 10);
    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
      return res(ctx.status(404));
    }
    users = users.filter((user) => user.id !== id);

    return res(ctx.status(204));
  }),
];
