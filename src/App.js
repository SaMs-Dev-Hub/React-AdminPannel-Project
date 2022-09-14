import React, { useState ,useEffect} from "react";
import "./App.css";

function App() {
  const [selectedUser, setuser] = useState(null);
  const [searchuser, setText] = useState("");
  const [APIData, setAPIData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  useEffect(() => {
    setAPIData(data);
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = APIData.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(APIData);
    }
  };

  // const onSearch = (e) => {
  //   const value = e.target.value;
  //   setText(value);
  //   console.log(value);
  // };

  const onClickfunction = (info) => {
    setuser(info);
  };
  console.log(selectedUser);
  return (
    <>
      <div className="subContainer">
        <input
          placeholder="Enter here"
          className="input"
          
          onChange={(e) => searchItems(e.target.value)}
        />
      </div>

      <div className="container">
        <div>
          <div id="table-section">
            <div id="table-wrapper">
              <div id="table-headers">
                <table>
                  <tr>
                    <th class="column1">Id</th>
                    <th class="column2">FirstName</th>
                    <th class="column3">LastName</th>
                    <th class="column4">Email</th>
                    <th class="column5">Phone</th>
                  </tr>
                </table>
              </div>
            </div>
          </div>

          <div id="table-data">

            { searchInput.length > 1 ? (
                    filteredResults.map((info) => {
                      return (
                        <tr
                          className={
                            selectedUser && selectedUser.firstName === info.firstName
                              ? "active"
                              : "table"
                          }
                          onClick={() => onClickfunction(info)}
                        >
                          <td class={true ? "column1" : "newColumn"}>{info.id}</td>
                          <td class="column2">{info.firstName}</td>
                          <td class="column3">{info.lastName}</td>
                          <td class="column4">{info.email}</td>
                          <td class="column5">{info.phone}</td>
                        </tr>
                      )
                    })
                ) :
            APIData.map((info, key) => {
              return (
                <tr
                  className={
                    selectedUser && selectedUser.firstName === info.firstName
                      ? "active"
                      : "table"
                  }
                  onClick={() => onClickfunction(info)}
                >
                  <td class={true ? "column1" : "newColumn"}>{info.id}</td>
                  <td class="column2">{info.firstName}</td>
                  <td class="column3">{info.lastName}</td>
                  <td class="column4">{info.email}</td>
                  <td class="column5">{info.phone}</td>
                </tr>
              );
            })}
          </div>
        </div>
        {selectedUser != null && (
          <div id="info-wrapper">
            <h1>Details</h1>
            <h4>
              User Selected:<span>{selectedUser.firstName}</span>
            </h4>
            <h4>
              Description: <span>{selectedUser.description} </span>
            </h4>
            <h4>
              Address: <span>{selectedUser.address.streetAddress}</span>
            </h4>
            <h4>
              City: <span>{selectedUser.address.city}</span>
            </h4>
            <h4>
              State: <span>{selectedUser.address.state}</span>{" "}
            </h4>
            <h4>
              Zip: <span>{selectedUser.address.zip}</span>
            </h4>
          </div>
        )}
      </div>
    </>
  );
}

export default App;

const data = [
  {
    id: 401,
    firstName: "Kent",
    lastName: "Abdurrahman",
    email: "CBarnhorn@mi.ly",
    phone: "(772)990-2073",
    address: {
      streetAddress: "8679 Vel Ct",
      city: "Berlin",
      state: "OK",
      zip: "47210",
    },
    description:
      "magna pretium sed porttitor dolor sollicitudin sed sollicitudin libero mattis vestibulum et amet etiam aliquam nullam sapien consequat mattis ac tincidunt et magna pretium etiam porttitor magna eget aliquam sit nunc lacus",
  },
  {
    id: 698,
    firstName: "Esperanza",
    lastName: "Pfeiffer",
    email: "YElmer@pharetra.io",
    phone: "(754)442-6126",
    address: {
      streetAddress: "3810 Turpis St",
      city: "Oklahoma",
      state: "OK",
      zip: "12423",
    },
    description:
      "elit sed facilisis sit dolor tortor adipiscing lacus ante odio ac amet aliquam ac egestas sit sagittis elit pulvinar id sed lacus rutrum sollicitudin rutrum convallis dolor eget convallis tortor amet vitae",
  },
  {
    id: 853,
    firstName: "Francesca",
    lastName: "Dunn",
    email: "MDuffy@magna.gov",
    phone: "(589)270-3890",
    address: {
      streetAddress: "2502 Id Ln",
      city: "Shrewsbury",
      state: "WI",
      zip: "44295",
    },
    description:
      "facilisis tellus elementum tortor mattis placerat suspendisse tincidunt et orci consectetur magna mattis nunc etiam odio scelerisque et suspendisse pharetra tempor quis pulvinar eros at elit turpis pretium sit orci in sit",
  },
  {
    id: 29,
    firstName: "Daydria",
    lastName: "Easterly",
    email: "SCole@nullam.com",
    phone: "(240)862-1884",
    address: {
      streetAddress: "1732 Tincidunt Ave",
      city: "Granite Falls",
      state: "AR",
      zip: "99640",
    },
    description:
      "quis sollicitudin ac at placerat dolor amet et vestibulum porta sollicitudin morbi hendrerit orci amet massa facilisis elit nullam etiam sed placerat ac vitae tortor pharetra nunc porttitor suspendisse dolor lectus quis",
  },
  {
    id: 171,
    firstName: "Kameko",
    lastName: "Daniello",
    email: "PZiniel@nec.gov",
    phone: "(975)144-4822",
    address: {
      streetAddress: "8830 Lacus Rd",
      city: "Kansas City",
      state: "LA",
      zip: "67927",
    },
    description:
      "dolor vel sollicitudin massa vestibulum vel porta dui sed vitae dolor et massa pretium nunc lacus fringilla libero aliquam pulvinar vitae eget magna etiam sit lacus fringilla ante sit ante sed sollicitudin",
  },
  {
    id: 228,
    firstName: "Dewey",
    lastName: "Richard",
    email: "KHughesdkaiya@elementum.org",
    phone: "(854)184-6022",
    address: {
      streetAddress: "6288 Eget Ln",
      city: "South Bend",
      state: "IL",
      zip: "40417",
    },
    description:
      "velit sed sit vitae nec malesuada lectus id sollicitudin magna massa lacus lacus ac odio ipsum tellus non placerat consequat suspendisse tincidunt eget et curabitur pharetra quis ac mattis nec odio nec",
  },
  {
    id: 691,
    firstName: "Amani",
    lastName: "Price",
    email: "FBarron@sollicitudin.org",
    phone: "(659)708-5004",
    address: {
      streetAddress: "6725 Elementum St",
      city: "Driggs",
      state: "RI",
      zip: "61575",
    },
    description:
      "vestibulum at amet porttitor ac augue aliquam ac augue ac rutrum placerat velit odio dolor quis risus facilisis massa placerat quis sapien eros convallis dolor tortor nunc vestibulum id etiam lacus rutrum",
  },
  {
    id: 618,
    firstName: "Terrence",
    lastName: "Ahmad",
    email: "NDavidson@sed.ly",
    phone: "(526)937-2614",
    address: {
      streetAddress: "6829 Odio Ln",
      city: "Boulder",
      state: "NE",
      zip: "81764",
    },
    description:
      "id nunc lacus sed nec aliquam nullam magna sollicitudin orci morbi sollicitudin facilisis tellus augue eget lorem amet etiam eget pretium mi sed odio nec lacus et eget ipsum lacus magna vitae",
  },
  {
    id: 663,
    firstName: "Cori",
    lastName: "Iliatova",
    email: "VBelkin@et.ly",
    phone: "(597)674-7505",
    address: {
      streetAddress: "3339 Sollicitudin Ln",
      city: "El Paso",
      state: "MD",
      zip: "97458",
    },
    description:
      "pretium facilisis in lacus tincidunt adipiscing nunc et odio ac sollicitudin libero et sed hendrerit at scelerisque sagittis elit amet eros tortor curabitur risus etiam mattis sed turpis massa dolor convallis scelerisque",
  },
  {
    id: 358,
    firstName: "William",
    lastName: "Kelton",
    email: "BWomack@neque.gov",
    phone: "(414)827-9392",
    address: {
      streetAddress: "5124 Tincidunt Ave",
      city: "Sebring",
      state: "OH",
      zip: "10770",
    },
    description:
      "massa sed sed in ac tellus risus etiam scelerisque aliquam molestie sed at nec vestibulum aenean et tincidunt sed neque orci adipiscing porttitor amet tortor aenean nec etiam magna amet mi non",
  },
  {
    id: 771,
    firstName: "Naeem",
    lastName: "Robichaud",
    email: "CPuckett@scelerisque.com",
    phone: "(589)602-3316",
    address: {
      streetAddress: "4568 Morbi Dr",
      city: "Lake In The Hills",
      state: "NY",
      zip: "65818",
    },
    description:
      "etiam porta tortor vestibulum sollicitudin mattis hendrerit mattis id quis amet facilisis porta mattis hendrerit eros vitae mattis ante vestibulum sed lorem placerat sed amet lectus elementum ipsum aliquam pulvinar pharetra etiam",
  },
  {
    id: 929,
    firstName: "Elzbieta",
    lastName: "Glean",
    email: "MTurich@vitae.gov",
    phone: "(723)734-0366",
    address: {
      streetAddress: "1301 Ipsum Ave",
      city: "Tinley Park",
      state: "ND",
      zip: "85696",
    },
    description:
      "tortor non odio hendrerit neque vitae risus ac elementum et tellus lectus dolor lacus porttitor libero egestas mi pharetra risus lacus at lectus pretium donec mi in eros eget ac facilisis vitae",
  },
  {
    id: 431,
    firstName: "Elissa",
    lastName: "Kasnow",
    email: "WLowe@curabitur.org",
    phone: "(587)156-6100",
    address: {
      streetAddress: "2732 Dolor Rd",
      city: "Valencia",
      state: "AR",
      zip: "87152",
    },
    description:
      "sollicitudin sed velit sit dolor magna consectetur vel pulvinar libero tortor hendrerit lectus ipsum sagittis libero non sed sollicitudin etiam ipsum at curabitur sollicitudin id neque mattis vel sapien magna elementum nunc",
  },
  {
    id: 14,
    firstName: "Geraldine",
    lastName: "Kirchner",
    email: "DBright@sed.io",
    phone: "(315)393-9461",
    address: {
      streetAddress: "1439 Dui St",
      city: "Saskatoon",
      state: "CA",
      zip: "22335",
    },
    description:
      "aenean pharetra lacus tellus lacus dolor sit ante odio aliquam massa fringilla placerat amet mi lacus eros rutrum convallis neque pharetra egestas molestie amet ac sollicitudin pulvinar sapien velit sit mi elementum",
  },
  {
    id: 724,
    firstName: "Nicole",
    lastName: "Langfeldt",
    email: "ANesbitt@ac.gov",
    phone: "(381)077-3610",
    address: {
      streetAddress: "2861 Malesuada Ct",
      city: "Denton",
      state: "IN",
      zip: "92648",
    },
    description:
      "mattis facilisis tellus massa dui pharetra sit quis placerat eget sed pulvinar molestie nec id tellus magna magna dolor et suspendisse amet egestas tortor ac porttitor sit tempor nec nec odio dolor",
  },
  {
    id: 979,
    firstName: "Shihong",
    lastName: "Bias",
    email: "WDryden@neque.io",
    phone: "(822)503-2703",
    address: {
      streetAddress: "6634 Mattis Ave",
      city: "Orange County",
      state: "KS",
      zip: "42029",
    },
    description:
      "tincidunt velit tincidunt vestibulum donec vitae dui fringilla tincidunt vestibulum massa amet elit dolor sed placerat amet fringilla pulvinar vestibulum sollicitudin ipsum ipsum tortor sit tincidunt amet sagittis et at tincidunt dolor",
  },
  {
    id: 821,
    firstName: "Ernest",
    lastName: "Shanafelt",
    email: "MBrown@etiam.com",
    phone: "(822)612-7352",
    address: {
      streetAddress: "910 Sit Ave",
      city: "Stl",
      state: "MA",
      zip: "18680",
    },
    description:
      "lorem sollicitudin id elit aliquam consectetur malesuada risus sed ac magna placerat lectus sed ipsum facilisis sed adipiscing rutrum vel ac amet ac magna dolor elit magna amet pulvinar non at mattis",
  },
  {
    id: 785,
    firstName: "Kenneth",
    lastName: "Matros",
    email: "HMeow@donec.net",
    phone: "(544)590-6514",
    address: {
      streetAddress: "2376 Tincidunt Rd",
      city: "Richmond",
      state: "WI",
      zip: "18233",
    },
    description:
      "velit quis curabitur molestie amet hendrerit eros consequat tempor pharetra facilisis sit vestibulum etiam in lacus dolor amet dolor dui lacus pulvinar pretium tortor hendrerit pulvinar sollicitudin pretium mattis tempor ac vestibulum",
  },
  {
    id: 20,
    firstName: "Joe",
    lastName: "Hayes",
    email: "AHess@sagittis.org",
    phone: "(546)632-2244",
    address: {
      streetAddress: "8276 Nunc Dr",
      city: "Pittsburg",
      state: "KS",
      zip: "76711",
    },
    description:
      "nunc odio tellus ipsum placerat dolor consectetur lacus massa sapien pharetra at molestie ante vitae scelerisque vestibulum convallis mattis vitae libero quis elementum tortor turpis facilisis sit turpis eget lorem sed sed",
  },
  {
    id: 154,
    firstName: "Shanae",
    lastName: "Hughesdkaiya",
    email: "LReith@magna.ly",
    phone: "(646)318-9785",
    address: {
      streetAddress: "5973 Consectetur Dr",
      city: "Gettysburg",
      state: "NJ",
      zip: "74062",
    },
    description:
      "amet nullam orci sit lacus morbi aenean pretium tincidunt sed amet elit lacus suspendisse sit amet scelerisque pulvinar donec nec etiam risus vel elit vestibulum ante sollicitudin elit sit pretium etiam et",
  },
  {
    id: 174,
    firstName: "Michael",
    lastName: "Robison",
    email: "EKeltner@tortor.com",
    phone: "(250)773-5667",
    address: {
      streetAddress: "6397 Dolor Ave",
      city: "Grand Rapids",
      state: "LA",
      zip: "90402",
    },
    description:
      "dolor placerat etiam convallis odio placerat curabitur lacus id vestibulum molestie consequat lacus amet quis elit ac morbi et sed aliquam magna tincidunt tempor ante tellus rutrum ipsum amet lectus hendrerit amet",
  },
  {
    id: 112,
    firstName: "Vanita",
    lastName: "Wantland",
    email: "MButler@tempor.net",
    phone: "(719)785-9751",
    address: {
      streetAddress: "7831 Curabitur St",
      city: "Traverse City",
      state: "IL",
      zip: "41233",
    },
    description:
      "elementum turpis pharetra sit at consectetur sed vestibulum vitae augue tortor sed orci ipsum ipsum consectetur vitae ipsum neque egestas sapien velit adipiscing consectetur neque tortor dolor mattis vitae elementum et consectetur",
  },
  {
    id: 302,
    firstName: "Tom",
    lastName: "Carnevale",
    email: "HBoblett@vel.net",
    phone: "(444)673-0547",
    address: {
      streetAddress: "4466 Porta Ave",
      city: "Lexington",
      state: "NJ",
      zip: "58835",
    },
    description:
      "lacus odio sit vestibulum odio vestibulum consectetur curabitur ac egestas tellus vestibulum elit orci dolor vel dolor eget ante fringilla aliquam et placerat ante pulvinar risus ipsum amet nullam pretium vestibulum scelerisque",
  },
  {
    id: 373,
    firstName: "Annabelle",
    lastName: "Rios",
    email: "BBunch@sed.ly",
    phone: "(516)630-5890",
    address: {
      streetAddress: "8415 Placerat St",
      city: "Bremen",
      state: "LA",
      zip: "14727",
    },
    description:
      "vestibulum et tortor amet morbi donec augue scelerisque mi turpis sed ac tortor nec consectetur egestas ipsum magna ac lacus et aenean dui sit neque adipiscing magna eget vitae sagittis et sagittis",
  },
  {
    id: 419,
    firstName: "Erica",
    lastName: "Popsikle",
    email: "ACann@turpis.net",
    phone: "(922)764-6061",
    address: {
      streetAddress: "1925 Suspendisse Ln",
      city: "Roy",
      state: "AR",
      zip: "37577",
    },
    description:
      "lorem velit molestie pulvinar lacus lacus magna libero vitae at ac mattis augue vel scelerisque tellus orci in mattis magna consequat non sed lorem ipsum orci velit ipsum et amet libero libero",
  },
  {
    id: 795,
    firstName: "Eva",
    lastName: "Callison",
    email: "RWard@vitae.gov",
    phone: "(830)914-4340",
    address: {
      streetAddress: "6875 Mi Ave",
      city: "Conneaut",
      state: "NM",
      zip: "25173",
    },
    description:
      "in et tortor mattis ac etiam at sapien curabitur quis porttitor massa massa facilisis vitae sapien pulvinar placerat vitae convallis tincidunt nec pulvinar facilisis tincidunt nec sit tortor lacus vitae et tortor",
  },
  {
    id: 918,
    firstName: "Corazon",
    lastName: "Ortega",
    email: "GCohen@mi.io",
    phone: "(801)712-0391",
    address: {
      streetAddress: "8342 Ac St",
      city: "Atlanta",
      state: "OR",
      zip: "77487",
    },
    description:
      "et aliquam ac molestie aliquam amet magna quis lacus odio libero sollicitudin quis placerat molestie tortor tortor magna pharetra nullam odio at vestibulum amet id eget magna aenean elementum hendrerit malesuada elit",
  },
  {
    id: 267,
    firstName: "Milanka",
    lastName: "Spratt",
    email: "CHale@nec.gov",
    phone: "(262)360-6621",
    address: {
      streetAddress: "9262 Non Rd",
      city: "Winfield",
      state: "OH",
      zip: "20119",
    },
    description:
      "aenean suspendisse porta malesuada suspendisse consequat magna lacus ac morbi aliquam porta rutrum dolor turpis tincidunt non pharetra tellus consectetur facilisis sed mattis libero etiam mi odio elit vestibulum aliquam libero molestie",
  },
  {
    id: 917,
    firstName: "Forest",
    lastName: "Deems",
    email: "JBottone@vitae.net",
    phone: "(922)179-5134",
    address: {
      streetAddress: "5408 Sapien St",
      city: "Billerica",
      state: "AK",
      zip: "59137",
    },
    description:
      "placerat massa lacus molestie velit lectus sit vitae rutrum sit odio dolor consequat mattis sit amet sapien lacus vestibulum dolor quis magna sapien ante consequat tempor fringilla nullam pharetra dolor magna dolor",
  },
  {
    id: 643,
    firstName: "Kamaniee",
    lastName: "Frutos",
    email: "JLeite@et.gov",
    phone: "(672)821-5406",
    address: {
      streetAddress: "8093 Pulvinar Ave",
      city: "Lafayette",
      state: "MS",
      zip: "84753",
    },
    description:
      "vitae nullam tellus curabitur vestibulum adipiscing ante orci pulvinar ac risus placerat tortor at dui at aliquam ac in facilisis pulvinar convallis dolor convallis ipsum dolor ipsum porta egestas sed ipsum etiam",
  },
  {
    id: 207,
    firstName: "Stephan",
    lastName: "Fenton",
    email: "JWeiler@porttitor.io",
    phone: "(214)672-6756",
    address: {
      streetAddress: "6219 Sed Ave",
      city: "Wellborn",
      state: "OH",
      zip: "74725",
    },
    description:
      "facilisis id amet orci et amet augue et aenean tempor sed convallis tempor pretium vitae lorem lectus et convallis neque in vel amet hendrerit eget elit egestas pretium nullam in elementum odio",
  },
  {
    id: 246,
    firstName: "Humayun",
    lastName: "Willis",
    email: "JRoyer@eros.org",
    phone: "(849)746-5193",
    address: {
      streetAddress: "2490 Ipsum Rd",
      city: "New York",
      state: "NC",
      zip: "91390",
    },
    description:
      "sed vestibulum nec consectetur egestas molestie vitae eget magna porttitor dolor nunc donec aenean donec lacus suspendisse magna at et augue sagittis pretium rutrum mi magna et nullam lectus dolor lacus et",
  },
];
