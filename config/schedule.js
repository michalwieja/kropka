export const scheduleGroupLabel = {
  younger: 'Zajęcia dla młodszych',
  older: 'Zajęcia dla starszych',
  all: 'Zajęcia dla wszystkich',
  senior: 'Zajęcia dla seniorów',
  music: 'Muzyka'
}

export const selectLabels = [
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

export const scheduleConfig = [{
  label: scheduleGroupLabel.younger,
  children: [{
    label: 'Malarstwo (wiek: 7-11 lat)',
    event: [{
      day: 'wtorek',
      hour: '16:30-17:30',
      time: '1.0'
    }]
  },
  {
    label: 'Szkoła rysunku (wiek: 7-11 lat)',
    event: [{
      day: 'wtorek',
      hour: '17:45-18:45',
      time: '1.0'
    }, {
      day: 'środa',
      hour: '09:00-10:00',
      time: '1.0'
    }]
  },
  {
    label: 'Ceramika (wiek: 7-11 lat)',
    event: [{
      day: 'środa',
      hour: '09:15-10:15',
      time: '1.0'
    }, {
      day: 'czwartek',
      hour: '16:30-17:30',
      time: '1.0'
    }]
  }]
},
{
  label: scheduleGroupLabel.older,
  children: [{
    label: 'Malarstwo (wiek: 12+)',
    event: [{
      day: 'wtorek',
      hour: '17:45-18:45',
      time: '1.5'
    }]
  },
  {
    label: 'Szkoła rysunku (wiek: 12+)',
    event: [{
      day: 'wtorek',
      hour: '16:00-17:30',
      time: '1.5'
    },
    {
      day: 'środa',
      hour: '10:15-11:45',
      time: '1.5'
    }]
  },
  {
    label: 'Ceramika (wiek: 12+)',
    event: [{
      day: 'środa',
      hour: '10:30-12:00',
      time: '1.5'
    },
    {
      day: 'czwartek',
      hour: '18:00-19:30',
      time: '1.5'
    }]
  },
  {
    label: 'Akwarele (wiek: 10+)',
    event: [{
      day: 'piątek',
      hour: '16:30-18:00',
      time: '1.5'
    }
    ]
  }]
},
{
  label: scheduleGroupLabel.all,
  children: [{
    label: 'Origami',
    event: [{
      day: 'czwartek',
      hour: '16:15-17:15',
      time: '1.0'
    }, {
      day: 'piątek',
      hour: '09:00-10:00',
      time: '1.0'
    }]
  },
  {
    label: 'Rękodzieło',
    event: [{
      day: 'czwartek',
      hour: '17:30-19:00',
      time: '1.5'
    },
    {
      day: 'piątek',
      hour: '10:15-11:45',
      time: '1.5'
    }]
  },
  {
    label: 'Grafika',
    event: [{
      day: 'piątek',
      hour: '10:30-12:00',
      time: '1.5'
    },
    {
      day: 'piątek',
      hour: '14:45-16:15',
      time: '1.5'
    }]
  }]
},
{
  label: scheduleGroupLabel.music,
  children: [{
    label: 'Ukulele (gr. początkująca)',
    event: [{
      day: 'sobota',
      hour: '10:30-11:30',
      time: '1.0'
    }]
  },
  {
    label: 'Ukulele (gr. zaawansowana)',
    event: [{
      day: 'sobota',
      hour: '11:45-12:45',
      time: '1.0'
    }]
  },
  {
    label: 'Gitara (zajęcia indywidualne lub duet)',
    event: [{
      day: 'środa',
      hour: '14:00-15:00',
      time: '1.0'
    }, {
      day: 'środa',
      hour: '15:00-16:00',
      time: '1.0'
    }, {
      day: 'środa',
      hour: '16:00-17:00',
      time: '1.0'
    }, {
      day: 'środa',
      hour: '17:00-18:00',
      time: '1.0'
    }]
  },
  {
    label: 'Muzykoterapia (zajęcia indywidualne)',
    event: [{
      day: 'środa',
      hour: '14:00-15:00',
      time: '1.0'
    }, {
      day: 'środa',
      hour: '15:00-16:00',
      time: '1.0'
    }, {
      day: 'środa',
      hour: '16:00-17:00',
      time: '1.0'
    }, {
      day: 'środa',
      hour: '17:00-18:00',
      time: '1.0'
    }]
  }]
}, {
  label: scheduleGroupLabel.senior,
  children: [{
    label: 'Ogród sztuk (zajęcia interdyscyplinarne)',
    event: [{
      day: 'poniedziałek',
      hour: '10:00-12:00',
      time: '2,0.'
    }]
  }]
}]
