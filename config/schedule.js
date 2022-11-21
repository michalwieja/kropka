export const scheduleGroupLabel = {
  baby: 'Zajęcia dla maluszków i przedszkolaków (z opiekunem)',
  younger: 'Zajęcia dla młodszych',
  older: 'Zajęcia dla starszych',
  all: 'Zajęcia dla wszystkich',
  senior: 'Zajęcia dla seniorów',
  music: 'Muzyka'
}

export const selectLabels = [
  {
    label: 'Zajęcia dla maluszków',
    key: 'baby'
  },
  {
    label: 'Zajęcia dla młodszych',
    key: 'younger'
  },
  {
    label: 'Zajęcia dla starszych',
    key: 'older'
  },
  {
    label: 'Zajęcia dla wszystkich',
    key: 'all'
  },
  {
    label: 'Zajęcia dla seniorów',
    key: 'senior'
  },
  {
    label: 'Muzyka',
    key: 'music'
  }
]

export const scheduleConfig = [
  {
    label: scheduleGroupLabel.baby,
    children: [
      {
        label: 'Muzykoterapia (wiek\u00A06-36m)',
        singlePrice: 25,
        multiPrice: 90,
        event: [{
          day: 'Sobota',
          shortDay: 'sb',
          hour: '10-30-11:00',
          time: '0.5h'
        }]
      },
      {
        label: 'Zabawy plastyczne (2-3\u00A0lata)',
        singlePrice: 35,
        multiPrice: 120,
        event: [{
          day: 'Środa',
          shortDay: 'śr',
          hour: '11:00-11:45',
          time: '45m'
        }]
      },
      {
        label: 'Teatr Kolorów czyli zajęcia plastyczne z\u00A0opowieścią\u00A0(3-\u20606\u00A0lat)',
        singlePrice: 45,
        multiPrice: 160,
        event: [{
          day: 'Środa',
          shortDay: 'Śr',
          hour: '09:45-10:45',
          time: '1.0h'
        }]
      },
      {
        label: 'KreAktywne Soboty rozwojowe zajęcia muzyczno-plastyczne (4-\u20606\u00A0lat)',
        singlePrice: 45,
        multiPrice: 160,
        event: [{
          day: 'Sobota',
          shortDay: 'Sb',
          hour: '09:45-10:45',
          time: '1.0h'
        }
        ]
      }]
  }, {
    label: scheduleGroupLabel.younger,
    children: [{
      label: 'Kreatywne warsztaty plastyczne (7-\u206011\u00A0lat)',
      singlePrice: 45,
      multiPrice: 160,
      event: [{
        day: 'Wtorek',
        shortDay: 'wt',
        hour: '17:45-18:45',
        time: '1.0h'
      }]
    }, {
      label: 'Pracownia Małego Architekta czyli zabawa makietą i\u00A0formą przestrzenną (7-\u206011\u00A0lat)',
      singlePrice: 50,
      multiPrice: 180,
      event: [{
        day: 'Wtorek',
        shortDay: 'wt',
        hour: '16:30-17:30',
        time: '1.0h'
      }]
    },
    {
      label: 'Ceramika czyli zabawa w\u00A0glinie (7-\u206011\u00A0lat)',
      singlePrice: 50,
      multiPrice: 180,
      event: [{
        day: 'Czwartek',
        shortDay: 'Czw',
        hour: '16:30-17:30',
        time: '1.0h'
      }]
    }]
  },
  {
    label: scheduleGroupLabel.older,
    children: [{
      label: 'Malarstwo (wiek:\u00A012+)',
      singlePrice: 60,
      multiPrice: 220,
      event: [{
        day: 'Wtorek',
        shortDay: 'wt',
        hour: '17:45-18:45',
        time: '1.5h'
      }]
    },
    {
      label: 'Szkoła rysunku (wiek:\u00A012+)',
      singlePrice: 55,
      multiPrice: 200,
      event: [{
        day: 'Wtorek',
        shortDay: 'wt',
        hour: '16:00-17:30',
        time: '1.5h'
      }]
    },
    {
      label: 'Ceramika (wiek:\u00A012+)',
      singlePrice: 60,
      multiPrice: 220,
      event: [
        {
          day: 'Czwartek',
          shortDay: 'Czw',
          hour: '18:00-19:30',
          time: '1.5h'
        }]
    },
    {
      label: 'Akwarele (wiek:\u00A010+)',
      singlePrice: 55,
      multiPrice: 200,
      event: [{
        day: 'Czwartek',
        shortDay: 'Czw',
        hour: '16:30-18:00',
        time: '1.5h'
      }
      ]
    }]
  },
  {
    label: scheduleGroupLabel.all,
    children: [{
      label: 'Ceramika',
      singlePrice: 60,
      multiPrice: null,
      event: [{
        day: 'Sobota',
        shortDay: 'Sb',
        hour: '10:30-12:00',
        time: '1.5h'
      }]
    },
    {
      label: 'Łyżkarstwo czyli od pieńka do łyżki',
      singlePrice: 50,
      multiPrice: null,
      event: [{
        day: 'Sobota',
        shortDay: 'Sb',
        hour: '10:30-12:00',
        time: '1.5h'
      }]
    },
    {
      label: 'Ręcznie robione',
      singlePrice: 55,
      multiPrice: null,
      event: [{
        day: 'Piątek',
        shortDay: 'Pt',
        hour: '17:30-19:00',
        time: '1.5h'
      }]
    }]
  },
  {
    label: scheduleGroupLabel.music,
    children: [{
      label: 'Ukulele (gr.\u00A0początkująca)',
      singlePrice: 50,
      multiPrice: 180,
      event: [{
        day: 'Sobota',
        shortDay: 'Sb',
        hour: '12:00-13:00',
        time: '1.0h'
      }]
    },
    {
      label: 'Ukulele (gr.\u00A0zaawansowana)',
      singlePrice: 50,
      multiPrice: 180,
      event: [{
        day: 'Sobota',
        shortDay: 'Sb',
        hour: '13:00-14:00',
        time: '1.0h'
      }]
    },
    {
      label: 'Gitara (zajęcia indywidualne lub duet)',
      singlePrice: null,
      multiPrice: null,
      event: [{
        day: 'Środa',
        shortDay: 'Śr',
        hour: 'ustal. indyw.',
        time: '1.0h'
      }]
    },
    {
      label: 'Muzykoterapia (zajęcia\u00A0indywidualne)',
      singlePrice: null,
      multiPrice: null,
      event: [{
        day: 'Środa',
        shortDay: 'Śr',
        hour: 'ustal. indyw.',
        time: '1.0h'
      }]
    }]
  }, {
    label: scheduleGroupLabel.senior,
    children: [{
      label: 'Ogród sztuk (zajęcia interdyscyplinarne)',
      singlePrice: 25,
      multiPrice: 90,
      event: [{
        day: 'Poniedziałek',
        shortDay: 'Pn',
        hour: '12:30-14:30',
        time: '2.0h'
      }]
    }]
  }]
