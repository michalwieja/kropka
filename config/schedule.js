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
    label: 'Zajęcia dla maluszków i przedszkolaków',
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
        label: 'Zabawy plastyczne (2-3\u00A0lata)',
        event: [{
          day: 'środa',
          shortDay: 'śr',
          hour: '11:00-11:45',
          time: '45m'
        }]
      },
      {
        label: 'Teatr Kolorów czyli zajęcia plastyczne z opowieścią (3-6\u00A0lat)',
        event: [{
          day: 'środa',
          shortDay: 'Śr',
          hour: '09:45-10:45',
          time: '1.0h'
        }]
      },
      {
        label: 'KreAktywne Soboty rozwojowe zajęcia muzyczno-plastyczne (4-6\u00A0lat)',
        event: [{
          day: 'sobota',
          shortDay: 'Sb',
          hour: '09:45-10:45',
          time: '1.0h'
        }
        ]
      }, {
        label: 'Muzykoterapia (wiek\u00A06-36m)',
        event: [{
          day: 'sobota',
          shortDay: 'sb',
          hour: '10-30-11:00',
          time: '0.5h'
        }]
      }]
  }, {
    label: scheduleGroupLabel.younger,
    children: [{
      label: 'Kreatywne warsztaty plastyczne (wiek\u00A07-11 lat)',
      event: [{
        day: 'wtorek',
        shortDay: 'wt',
        hour: '17:45-18:45',
        time: '1.0h'
      }]
    },
    {
      label: 'Pracownia Małego Architekta czyli zabawa makietą i formą przestrzenną (wiek\u00A07-11 lat)',
      event: [{
        day: 'wtorek',
        shortDay: 'wt',
        hour: '16:30-17:30',
        time: '1.0h'
      }]
    },
    {
      label: 'Ceramika czyli zabawa w glinie (7-11\u00A0lat)',
      event: [{
        day: 'czwartek',
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
      event: [{
        day: 'wtorek',
        shortDay: 'wt',
        hour: '17:45-18:45',
        time: '1.5h'
      }]
    },
    {
      label: 'Szkoła rysunku (wiek:\u00A012+)',
      event: [{
        day: 'wtorek',
        shortDay: 'wt',
        hour: '16:00-17:30',
        time: '1.5h'
      }]
    },
    {
      label: 'Ceramika (wiek:\u00A012+)',
      event: [
        {
          day: 'czwartek',
          shortDay: 'Czw',
          hour: '18:00-19:30',
          time: '1.5h'
        }]
    },
    {
      label: 'Akwarele (wiek:\u00A010+)',
      event: [{
        day: 'czwartek',
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
      event: [{
        day: 'sobota',
        shortDay: 'Sb',
        hour: '10:30-12:00',
        time: '1.5h'
      }]
    },
    {
      label: 'Łyżkarstwo czyli od pieńka do łyżki',
      event: [{
        day: 'sobota',
        shortDay: 'Sb',
        hour: '10:30-12:00',
        time: '1.5h'
      }]
    },
    {
      label: 'Ręcznie robione',
      event: [{
        day: 'piątek',
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
      event: [{
        day: 'sobota',
        shortDay: 'Sb',
        hour: '12:00-13:00',
        time: '1.0h'
      }]
    },
    {
      label: 'Ukulele (gr.\u00A0zaawansowana)',
      event: [{
        day: 'sobota',
        shortDay: 'Sb',
        hour: '13:00-14:00',
        time: '1.0h'
      }]
    },
    {
      label: 'Gitara (zajęcia indywidualne lub duet)',
      event: [{
        day: 'środa',
        shortDay: 'Śr',
        hour: 'ustal. indyw.',
        time: '1.0h'
      }]
    },
    {
      label: 'Muzykoterapia (zajęcia\u00A0indywidualne)',
      event: [{
        day: 'środa',
        shortDay: 'Śr',
        hour: 'ustal. indyw.',
        time: '1.0h'
      }]
    }]
  }, {
    label: scheduleGroupLabel.senior,
    children: [{
      label: 'Ogród sztuk (zajęcia interdyscyplinarne)',
      event: [{
        day: 'poniedziałek',
        shortDay: 'Pn',
        hour: '12:30-14:30',
        time: '2.0h'
      }]
    }]
  }]
