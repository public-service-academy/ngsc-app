// @flow

import type { Name } from 'types'

export type BioType = {
  name: Name,
  position: string,
  email: string,
  pictureURL: string,
}

export type BioGroupType = {
  group: string,
  bios: Array<BioType>,
}

export const bioGroupsData: Array<BioGroupType> = [
  {
    group: 'Professional Staff',
    bios: [
      {
        name: {
          first: 'Brett',
          last: 'Hunt'
        },
        position: 'Executive Director',
        email: 'brett.hunt@asu.edu',
        pictureURL: 'https://media.licdn.com/media/p/6/005/06f/10d/37f07f4.jpg'
      },
      {
        name: {
          first: 'Jessica',
          last: 'Eldridge'
        },
        position: 'Assistant Director',
        email: 'jessica.eldridge@asu.edu',
        pictureURL: 'https://media.licdn.com/media/p/2/000/2b4/161/38a250d.jpg'
      }
    ]
  },
  {
    group: 'Chief of Staff and Committee Leads',
    bios: []
  },
  {
    group: 'Section Leads',
    bios: []
  },
  {
    group: 'Committee Chairs',
    bios: []
  },
  {
    group: 'Mission Teams 1-15',
    bios: [
      {
        name: {
          first: 'Shea',
          last: 'Brutinel',
        },
        position: 'MT 1',
        email: '',
        pictureURL: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/21369197_1478258892266196_4499690090165972590_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeE_cp8rkiJah868dw8phg6UfruLfaTVZx2XoihNJMjuOSE8iB--9EzsmkaBCxlQGyEwqDB8HEhrUznZB44he0SnK6MleqDxtLBhSMOalAy7Xw&oh=5563ba32f39d42c99e8b7a634ed247a0&oe=5B711F22',
      },
      {
        name: {
          first: 'Jessica',
          last: 'Francis',
        },
        position: 'MT 2',
        email: '',
        pictureURL: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/27336700_1498191083612983_1956229876721712277_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeHN3AatMKFgVaNyU6Qxht045HhpSFPL7rusbEblpIsor9OBQCeI47MKBjOzFhnwr2c6O4mvvFx0VT0hQlTcrUIu9GwBRzWV7Jd7HdhwuEcrCQ&oh=b10cb80ca77b9e0988e72fd49e13e260&oe=5B27CE51',
      },
      {
        name: {
          first: 'Rachel',
          last: 'Spencer',
        },
        position: 'MT 3',
        email: '',
        pictureURL: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/25353841_1748903012072508_3414789447634174856_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeFbtTkdb4JNKLawP730CpXH-K92qNfQE5jcUAx4-_iiWsUHSTMNweNwlh2yo-SIP022AqsntBhjlf4YPIcwlzqUrTYPpoU1mVm5m4xdecX54w&oh=b99aebd061952a5ef46b1b19a84ebc53&oe=5B70EB6D',
      },
      {
        name: {
          first: 'Marisa',
          last: 'Eldridge',
        },
        position: 'MT 4',
        email: '',
        pictureURL: 'https://media.licdn.com/dms/image/C4D03AQFLs6i-c753eQ/profile-displayphoto-shrink_800_800/0?e=1527994800&v=alpha&t=UZqjxvDyip0CaiUWEftClJ3teE7AfRaZxJK3IwiwDow',
      },
      {
        name: {
          first: 'Raul',
          last: 'Tapia',
        },
        position: 'MT 5',
        email: '',
        pictureURL: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/12650904_978792422191821_3387201371454587093_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeEjQltFrkRbsru5369T_YpJlPo779oxbIpXNpiTPgW7jmGLJBdOKf9tmIv0CxvolENr2n2d91r2GgCeub1IKowH_yb_JQuFnfoIAG_HiavHeQ&oh=b6fb8ca7fd5103e2f780146bfc4d8b1c&oe=5B6E5A3C',
      },
      {
        name: {
          first: 'Jeneeshia',
          last: 'Jose',
        },
        position: 'MT 6',
        email: '',
        pictureURL: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/18622283_1206623986113209_3109728238922392843_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeHca2LRUFKUkW7ELBPO0yweExu0oR4o7lFX-G4MnDg_V9nzbhYvGYJyLhh39iysX8uQJXFK71Tas9TIzBTsIK6vFfuavjIk228e9517JTDoTw&oh=1dfc84e75be1d5794aac6410ce8d914f&oe=5B3998F0',
      },
      {
        name: {
          first: 'Daiva',
          last: 'Scovil',
        },
        position: 'MT 7',
        email: '',
        pictureURL: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/18739921_2303263503231678_6076459444731137223_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeGJJ0a58bzI75Bt5u0DboOONTo0GBshNier6p6lswEHAaPlhOkZr9CG5xtOTLKvnP728mAgCGar9kmisVbRoV1GWihk2SM8d7wsAm8zF8OwjA&oh=41773537911b932c12d866f7b37d84d8&oe=5B32217B',
      },
      {
        name: {
          first: 'Mary',
          last: 'Vidal',
        },
        position: 'MT 8',
        email: '',
        pictureURL: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/29177118_1081769055309666_1460970650916544069_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeGagTIBgs6EDNcZxOLUgBVnQ23DLE81zg6ULvXUHvnTItZVG6ohpg9VSoBj6niYEHMO70b1Mi60aehF5FCrNs0MySIA5eWZMoY6SqodFqLslg&oh=f122d8cd065e9f910ff52f8b1ed49798&oe=5B6D75F2',
      },
      {
        name: {
          first: 'Mia',
          last: 'Sablan',
        },
        position: 'MT 9',
        email: '',
        pictureURL: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/26993980_105084330306328_5112471371682069571_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeH9hdMOX7uPq57SObK24NWeH0HY5rdjzk4sKGixl9iyJVT74kB-pGHdLUBZ0R5XGpYGLQr_E04Ss47_YJMyVitRTVOaHGQ6w4GesQvrw382Lg&oh=2ac030f79d2f12dee46b9ee185caca22&oe=5B6D5603',
      },
      {
        name: {
          first: 'Taylor',
          last: 'Carstens',
        },
        position: 'MT 10',
        email: '',
        pictureURL: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/29244277_1476497145811026_2708219644564471808_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeEjCNvSOuKlglG9gZi2e_IP-Gilc6jAGrTCiBITR1J0IEeScGHQXiYygs37UQt2xldTgAMxSlvxHeqUFql5Li30drq47F_wIat5oX4YE0jc5Q&oh=669a39ed91c2fcc8283023489d0411f4&oe=5B270017',
      },
      {
        name: {
          first: 'Alana',
          last: 'Ramirez',
        },
        position: 'MT 11',
        email: '',
        pictureURL: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/29136354_2070045446339712_9050133057796833280_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeFalOcaJOTIbIANNWtv_259OgIKZwrx8fjqLRCPk1HIq0EjI5E9eJTjOWHPc5w6l-zsB58pczaGJvOqNeTa0x3r9Cqwhdwp9HzNnNqZY8VSaA&oh=8fe9ba9beb8c8292b945f214eb02ea98&oe=5B684620',
      },
      {
        name: {
          first: 'Elliot',
          last: 'Wasbotten',
        },
        position: 'MT 12',
        email: '',
        pictureURL: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/15181453_722640394556555_7158298907469467248_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeE3F3meoQNmA-T7nzBqqUP5B8oMjTrtNcskEc6qdH_gqv-gSCF4kwCw-_-iNaqE6tat6La57PPJvhMUH5FDEZrfFfKopxAnmfZXZI7AsxFjvw&oh=8832069b021078cf30c958d241e5962c&oe=5B35D00F',
      },
      {
        name: {
          first: 'Ray',
          last: 'Regorgo',
        },
        position: 'MT 13',
        email: '',
        pictureURL: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/23172399_1977253352492841_5094224241819580112_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeF3iGdroTuP4pmQ0awMr20JDCdcnT_roSMTkL5kARJwiZlUUwOXnah3cVleMRe8NTO15VPn5jjpYiRPqKlVkySMYHQ2m7kvQ6QWrEQ1N52PWA&oh=bdd4249d84234d42415a7d0b9ce21663&oe=5B68ECF0',
      },
      {
        name: {
          first: 'Riley',
          last: 'O\'Toole',
        },
        position: 'MT 14',
        email: '',
        pictureURL: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/20429924_1591841024173232_8054839933463628297_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeHSFpT11qEJ1QLZizrEPbuVB7mQ2_WSDnEUPZ63kSm4ofSIVAcXsmyd5FNAqyhBLV2tAMWFCaSOw5KOjT8giif5awIyhruwkXOLEghvTzIchw&oh=d3c0a4922e7e85be7a82a3bcb44d4b53&oe=5B68A1AC',
      },
      {
        name: {
          first: 'Chance',
          last: 'Jones',
        },
        position: 'MT 15',
        email: '',
        pictureURL: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/29571370_903225509802817_525459460618179537_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeECIESnps-DBaQmR2rZ6_BHlr2ANltMwGj7xb6E27rdZZceBcrK89qTtXHIssZs3cKZEIhjKhEgA2h6efnuxj43mIU9RM96E50-ql5lf9J9dg&oh=34aa8812197c71e21997db0808c1b244&oe=5B338B9B',
      },
    ]
  },
  {
    group: 'Mission Teams 16-30',
    bios: [
      {
        name: {
          first: 'Josh',
          last: 'Kumar',
        },
        position: 'MT 16',
        email: '',
        pictureURL: 'https://media.licdn.com/dms/image/C4E03AQH6BUlTIi7AAA/profile-displayphoto-shrink_800_800/0?e=1527994800&v=alpha&t=RLTPsCTHHbeSTMmdccNJTscpV3IizNKLaCpnBnY-COU',
      },
      {
        name: {
          first: 'Mady',
          last: 'Privatsky',
        },
        position: 'MT 17',
        email: '',
        pictureURL: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/27972737_1035662576574609_8412136046921582079_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeFrUDIZge7lYDKP4TA3ITuZH1vhxEiI1kk4Grs-kyRF4smR9Kcwx5Wegh0gV88RS2K_qdvSbjuEyMTz-ZkIFDVtwmU3ZgP7Ckoc3NvMZGfetA&oh=26ec4be8944e4eb16ab3aabe7eae725b&oe=5B68A6BF',
      },
      {
        name: {
          first: 'Elizabeth',
          last: 'Pino',
        },
        position: 'MT 18',
        email: '',
        pictureURL: 'https://media.licdn.com/dms/image/C5603AQGV1YBTN86mNg/profile-displayphoto-shrink_800_800/0?e=1527994800&v=alpha&t=BmD-5RiDrAPYy8vM2by9YhffSzTy7eNCD9EXVMWEuo4',
      },
      {
        name: {
          first: 'Kelsey',
          last: 'Atcheson',
        },
        position: 'MT 19',
        email: '',
        pictureURL: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/21462564_301146440360641_4862088140188246245_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeF_OKaUMUF3qiKZiaXGtMuLR7Z9SVB6S_hWdCheTCQyjRgvNMN46lLSa_55i8-G-dc5pXPp632NDVUTzX1uNUnluOVPj3FMIgALeuvZFM7I1A&oh=4d91eed5e8043d9f47e39e7e4f4f1c2c&oe=5B70255D',
      },
      {
        name: {
          first: 'Anna',
          last: 'Vu',
        },
        position: 'MT 20',
        email: '',
        pictureURL: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/29063064_1624684540954222_8941831287014948864_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeEJpSFgo5cHDv2FAjbX4cQkVNKg8LOQhRsrkobkz13krroPgZgss5EFt05NPdEXVsC4gl_7rH7VUzUVD0VCf4O4HPfJ9BwCUSHrKdzRyIPStQ&oh=946200de5e8770b1e059144c9f09a7da&oe=5B7129E8',
      },
      {
        name: {
          first: 'Marisela',
          last: 'Arias',
        },
        position: 'MT 21',
        email: '',
        pictureURL: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/27867824_1580981285272848_3534441539306129269_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeFwWxG56zKBXPxltS8XjPuTNrdnm0eq6d7UXjbkGwq3yn1lTxbTtnfe9iNdTYxtCH168Lb0wsH22jsGXuDV9048Al3otqC1dXgYNQPLp02DSw&oh=dc494bca40ecf8fdf2a8cc17d6ddaa90&oe=5B731C24',
      },
      {
        name: {
          first: 'Consuelo',
          last: 'Arroyo',
        },
        position: 'MT 22',
        email: '',
        pictureURL: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/15284077_1877061835858101_4177114520453946885_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeGbi2iTTAa_pH1y8NEiPNKDZ7SKIEhde8YO4pH2w6TRrf4UG8mZ3K537VZfkzWU_QQ_DjACMMYD8ZYDINU7ApCrbvx0KRsDVil1W65xr0dn2w&oh=8d914bb5c70d87003f3c4cda413bd56c&oe=5B6AA593',
      },
      {
        name: {
          first: 'Jack',
          last: 'Fuller',
        },
        position: 'MT 23',
        email: '',
        pictureURL: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/13516411_122854414809833_2024540420430407184_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeH45TIm5XIH2j5PHnT7OAOWGJCkdMsBH6mmkLp4OQP-g_z0prPNvFDYMomytU_1jAyi0Paf49Bbo3Sa2E6j3_xCSbEafp5LTxn-rhDHrhgh_A&oh=52acfb842f85ce8f142294f547258cb9&oe=5B2FF6CA',
      },
      {
        name: {
          first: 'Mikayla',
          last: 'Beatty',
        },
        position: 'MT 24',
        email: '',
        pictureURL: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/27331673_161792431130658_6742593474795921291_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeGZ-GfcxhSre5miERdEYmQaExE-NazHioJ4ROaBjjvQjNS88QNXjZUtCr2voc4O1OrzXxeDKzq1FcSRkkCzlfTRZ6hVPGVEPSjms8onMhoMFA&oh=f784aeb58e0f0c696bb4be333509d37a&oe=5B37FA9A',
      },
      {
        name: {
          first: 'Claire',
          last: 'Block',
        },
        position: 'MT 25',
        email: '',
        pictureURL: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/14713526_649232478577895_2036347344205480931_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeFRLYaKiT26mcC1WrEIRlqnJ9UtRwdXzdtfa5YV1A-2anFFCDlqhJlHS940tj450Ttz9G-B_zYIXqr2AyaUja8nJ3_xgwE5jMdHYHzAFnV0wQ&oh=af2ca484829ad618d914ca93ec20d0a8&oe=5B6D7E0D',
      },
      {
        name: {
          first: 'John',
          last: 'Janezic',
        },
        position: 'MT 26',
        email: '',
        pictureURL: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/29594661_1047939812021659_2463906226667226102_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeHaFmsG4XcJHnj8FYq53dVDg9isykpqZgLkGU8HbWPK45qFTyHebaTE0t1D8u7wbIaV-jXcXaaOW57Foc1jP68rfFC9cw0a1S9Yr7PPvb3psw&oh=6f1465c26afd972e80fb9d438d41f7c1&oe=5B641427',
      },
      {
        name: {
          first: 'Carlos',
          last: 'Zamora',
        },
        position: 'MT 27',
        email: '',
        pictureURL: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/21105546_115892235807478_6757796221769618757_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeHzgpViGUSKMO_A4JM6AqXZWVP923F7TP2-O3oORIIM08u8tpD0umY6d7UdmPwrzSLrD6HV6lYNQ1n9HTkL-jC425AFFZevRSccIb55d2wezw&oh=58bb6a8393cdee2f86c7e4d80f21aee4&oe=5B70A23C',
      },
      {
        name: {
          first: 'Bailey',
          last: 'De La Torre',
        },
        position: 'MT 28',
        email: '',
        pictureURL: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/16142381_10208135948612657_5443882619920928199_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeED_-uvC684mTpA1I9RgqqqHb9vCdk2uw9YAZj7NBYIzS5uXuxC5H7RyxU5Q7kaCY-uPpIE2QU3sO5nbqGQLtBlijllzQ7eKe4UkkgXBIqb_Q&oh=1b90575997ce1916e2aaf13a2c6307be&oe=5B270E2E',
      },
      {
        name: {
          first: 'Angel',
          last: 'Morales',
        },
        position: 'MT 29',
        email: '',
        pictureURL: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/22195784_497240107298788_2100061400948613900_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeFAfF8m7dK6kNihnrbNgwWjMJGh2i20mRdw3v-WEKyX9y_TJqq8tfX3FZ8R86R3sSwNLXzR-BzNVj8BQG_-zZclNHgmBI215RKpDS12-ROAxw&oh=faf6376d0a61b3604cc76ac2d7a9c1ca&oe=5B342D11',
      },
      {
        name: {
          first: 'Cyrus',
          last: 'Commissariat',
        },
        position: 'MT 30',
        email: '',
        pictureURL: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/29542846_349286485565852_6542615990104512195_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeHjF5-yWyPO_siEFInE9vREKeXgM_vwZ7qlVc2RTXCfG0V0b5H-6_c3MpkMS5Szu66N4OBTwkymyEK9n2lYfJC0nFLOHFs4zV7GVsge7_vPow&oh=acd1f48e46cf6bf897d339498ca64e7f&oe=5B656D66',
      },
    ]
  },

]