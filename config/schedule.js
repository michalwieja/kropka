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
    label: 'Malarstwo (7-11\u00A0lat)',
    event: [{
      day: 'wtorek',
      shortDay: 'wt',
      hour: '16:30-17:30',
      time: '1.0'
    }]
  },
  {
    label: 'Szkoła rysunku (7-11\u00A0lat)',
    event: [{
      day: 'wtorek',
      shortDay: 'wt',
      hour: '17:45-18:45',
      time: '1.0'
    }, {
      day: 'środa',
      shortDay: 'Śr',
      hour: '09:00-10:00',
      time: '1.0'
    }]
  },
  {
    label: 'Ceramika (7-11\u00A0lat)',
    event: [{
      day: 'środa',
      shortDay: 'Śr',
      hour: '09:15-10:15',
      time: '1.0'
    }, {
      day: 'czwartek',
      shortDay: 'Czw',
      hour: '16:30-17:30',
      time: '1.0'
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
      time: '1.5'
    }]
  },
  {
    label: 'Szkoła rysunku (wiek:\u00A012+)',
    event: [{
      day: 'wtorek',
      shortDay: 'wt',
      hour: '16:00-17:30',
      time: '1.5'
    },
    {
      day: 'środa',
      shortDay: 'Śr',
      hour: '10:15-11:45',
      time: '1.5'
    }]
  },
  {
    label: 'Ceramika (wiek:\u00A012+)',
    event: [{
      day: 'środa',
      shortDay: 'Śr',
      hour: '10:30-12:00',
      time: '1.5'
    },
    {
      day: 'czwartek',
      shortDay: 'Czw',
      hour: '18:00-19:30',
      time: '1.5'
    }]
  },
  {
    label: 'Akwarele (wiek:\u00A010+)',
    event: [{
      day: 'piątek',
      shortDay: 'Pt',
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
      shortDay: 'Czw',
      hour: '16:15-17:15',
      time: '1.0'
    }, {
      day: 'piątek',
      shortDay: 'Pt',
      hour: '09:00-10:00',
      time: '1.0'
    }]
  },
  {
    label: 'Rękodzieło',
    event: [{
      day: 'czwartek',
      shortDay: 'Czw',
      hour: '17:30-19:00',
      time: '1.5'
    },
    {
      day: 'piątek',
      shortDay: 'Pt',
      hour: '10:15-11:45',
      time: '1.5'
    }]
  },
  {
    label: 'Grafika',
    event: [{
      day: 'piątek',
      shortDay: 'Pt',
      hour: '10:30-12:00',
      time: '1.5'
    },
    {
      day: 'piątek',
      shortDay: 'Pt',
      hour: '14:45-16:15',
      time: '1.5'
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
      hour: '10:30-11:30',
      time: '1.0'
    }]
  },
  {
    label: 'Ukulele (gr.\u00A0zaawansowana)',
    event: [{
      day: 'sobota',
      shortDay: 'Sb',
      hour: '11:45-12:45',
      time: '1.0'
    }]
  },
  {
    label: 'Gitara (zajęcia indywidualne lub duet)',
    event: [{
      day: 'środa',
      shortDay: 'Śr',
      hour: '14:00-15:00',
      time: '1.0'
    }, {
      day: 'środa',
      shortDay: 'Śr',
      hour: '15:00-16:00',
      time: '1.0'
    }, {
      day: 'środa',
      shortDay: 'Śr',
      hour: '16:00-17:00',
      time: '1.0'
    }, {
      day: 'środa',
      shortDay: 'Śr',
      hour: '17:00-18:00',
      time: '1.0'
    }]
  },
  {
    label: 'Muzykoterapia (zajęcia\u00A0indywidualne)',
    event: [{
      day: 'środa',
      shortDay: 'Śr',
      hour: '14:00-15:00',
      time: '1.0'
    }, {
      day: 'środa',
      shortDay: 'Śr',
      hour: '15:00-16:00',
      time: '1.0'
    }, {
      day: 'środa',
      shortDay: 'Śr',
      hour: '16:00-17:00',
      time: '1.0'
    }, {
      day: 'środa',
      shortDay: 'Śr',
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
      shortDay: 'Pn',
      hour: '10:00-12:00',
      time: '2,0.'
    }]
  }]
}]
