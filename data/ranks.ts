export const ranks = {
  command: [
    {
      rank: "Marshal Commander",
      code: "MCDR",
      description: "Commander of the 104th Fleet",
    },
    {
      rank: "Senior Commander",
      code: "SCDR",
      description: "Advisor to the Marshal Commander",
    },
    {
      rank: "Air Marshal",
      code: "MSHL",
      description: "Advisor to the Marshal Commander",
    },
  ],
  army: [
    {
      rank: "Battalion Commander",
      code: "BCDR",
      description: "Commander of the Army",
    },
    {
      rank: "Clone Commander",
      code: "CDR",
      description: "Commander of Console Sector",
    },
    {
      rank: "Major",
      code: "MAJ",
      description: "Command Staff with a Purpose",
    },
    {
      rank: "Captain",
      code: "CPT",
      description: "Head of Infantry Company",
    },
    {
      rank: "Lieutenant",
      code: "LT",
      description: "Senior Officer - Company Executive",
    },
    {
      rank: "2nd Lieutenant",
      code: "2LT",
      description: "Officer",
    },
    {
      rank: "Warrant Officer",
      code: "WO",
      description: "Senior NCO",
    },
    {
      rank: "Sergeant Major",
      code: "SGM",
      description: "Senior Staff - Raid Hosts",
    },
    {
      rank: "Sergeant",
      code: "SGT",
      description: "Key Staff - Raid Hosts",
    },
    {
      rank: "Corporal",
      code: "CPL",
      description: "Staff - Leaders in Training",
    },
    {
      rank: "Lance Corporal",
      code: "LCPL",
      description: "Senior Trooper - Staff in Training",
    },
    {
      rank: "Clone Trooper",
      code: "CT",
      description: "Standard Trooper",
    },
  ],
  starfighter: [
    {
      rank: "Commodore",
      code: "COM",
      description: "Head of the Starfighter Corps",
    },
    {
      rank: "Air Captain",
      code: "CPT",
      description: "2IC of the Starfighter Corps",
    },
    {
      rank: "Wing Commander",
      code: "WCDR",
      description: "Head of Starfighter Wing",
    },
    {
      rank: "Group Captain",
      code: "GCPT",
      description: "2IC of Starfighter Wing",
    },
    {
      rank: "Squadron Leader",
      code: "SL",
      description: "Senior Staff - Head of Squadron",
    },
    {
      rank: "Flight Captain",
      code: "FCPT",
      description: "Key staff - Raid Hosts",
    },
    {
      rank: "Flight Lieutenant",
      code: "FLT",
      description: "Staff - Raid Hosts",
    },
    {
      rank: "Flight Officer",
      code: "FO",
      description: "Senior Pilot - Staff in Training",
    },
    {
      rank: "Pilot Officer",
      code: "PO",
      description: "Standard Pilot",
    },
  ],
  special: {
    arc: [
      {
        rank: "ARC Commander",
        code: "ACDR",
        description: "In charge of the ARC Program, in Command Staff",
      },
      {
        rank: "ARC Major",
        code: "AMAJ",
        description: "In charge of the ACPTs and is part of Command staff. Same power as a MAJ",
      },
      {
        rank: "ARC Captain",
        code: "ACPT",
        description: "ARC Admissions Officer, same power as a CPT",
      },
      {
        rank: "ARC Lieutenant",
        code: "ALT",
        description: "ARC Admissions Officer, same power as a LT",
      },
      {
        rank: "ARC Sergeant",
        code: "ASGT",
        description: "ARC Staff, same power as a 2LT",
      },
      {
        rank: "ARC Trooper",
        code: "AT",
        description:
          "Troopers found to be the best of the best out of staff and CTs. Has the same power as a SGM. ATs may also host scouting sessions",
      },
    ],
    rc: [
      {
        rank: "RC Commander",
        code: "CDR",
        description: "Program Admissions Officer",
      },
      {
        rank: "RC Sergeant",
        code: "SGT",
        description: "Third Rank of the RCs",
      },
      {
        rank: "RC Corporal",
        code: "CPL",
        description: "Second Rank of the RCs",
      },
      {
        rank: "RC Private",
        code: "PVT",
        description: "First Rank of RCs",
      },
    ],
  },
  naval: [
    {
      rank: "Naval Commander",
      code: "NCDR",
      description: "Retired CPT / MAJ",
    },
    {
      rank: "Lieutenant Commander",
      code: "LTCDR",
      description: "Retired LT",
    },
    {
      rank: "Naval Lieutenant",
      code: "NLT",
      description: "Retired 2LT",
    },
    {
      rank: "Petty Officer 1st Class",
      code: "PO1",
      description: "Retired SGM",
    },
    {
      rank: "Petty Officer 2nd Class",
      code: "PO2",
      description: "Retired SGT",
    },
    {
      rank: "Petty Officer 3rd Class",
      code: "PO3",
      description: "Retired CPL",
    },
  ],
}

export type Rank = {
  rank: string
  code: string
  description: string
}
