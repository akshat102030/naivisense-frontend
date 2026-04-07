export const homePlanByChildId = {
  c001: {
    profile: {
      age: 6,
      condition: 'Autism (mild-moderate), speech delay',
      goals: ['Improve communication', 'Sensory regulation', 'Improve focus'],
    },
    timeline: [
      {
        block: 'Morning Routine',
        window: '6:30 AM - 10:00 AM',
        items: [
          {
            time: '6:30 AM',
            title: 'Wake Up',
            type: 'Sensory Regulation',
            details: ['Gentle sensory wake-up with soft music and dim light', 'Deep pressure hug for calming'],
          },
          {
            time: '7:00 AM',
            title: 'Morning Hygiene',
            type: 'Speech + Visual Learning',
            details: ['Brushing with verbal cues for speech practice', 'Use picture cards for step-by-step routine'],
          },
          {
            time: '7:30 AM',
            title: 'Breakfast',
            type: 'Diet',
            details: ['Follow breakfast plan from diet chart'],
          },
          {
            time: '8:00 AM',
            title: 'Speech Therapy',
            type: 'Speech Therapy',
            duration: '20 mins',
            details: ['Object naming: apple, ball, cup, spoon', 'Repeat simple sentences', 'Mirror articulation practice'],
          },
          {
            time: '8:30 AM',
            title: 'Occupational Therapy',
            type: 'Occupational Therapy',
            duration: '30 mins',
            details: ['Fine motor: bead threading, clay play', 'Sensory: brushing therapy and textured objects'],
          },
          {
            time: '9:30 AM',
            title: 'Structured Free Play',
            type: 'Play Therapy',
            details: ['Puzzle and building blocks', 'Parent-guided interaction'],
          },
        ],
      },
      {
        block: 'Midday Routine',
        window: '10:00 AM - 2:00 PM',
        items: [
          {
            time: '10:30 AM',
            title: 'Outdoor Activity',
            type: 'Physical + Sensory',
            details: ['Walking or cycling', 'Supports sensory regulation'],
          },
          {
            time: '11:30 AM',
            title: 'Cognitive Therapy',
            type: 'Cognitive Therapy',
            duration: '20 mins',
            details: ['Matching shapes and colors', 'Flashcards and memory games'],
          },
          {
            time: '12:30 PM',
            title: 'Lunch',
            type: 'Diet',
            details: ['Follow lunch plan from diet chart'],
          },
          {
            time: '1:30 PM',
            title: 'Rest / Nap',
            type: 'Regulation',
            duration: '60-90 mins',
            details: ['Essential for emotional regulation'],
          },
        ],
      },
      {
        block: 'Afternoon Routine',
        window: '2:00 PM - 6:00 PM',
        items: [
          {
            time: '2:30 PM',
            title: 'Behaviour Therapy (ABA)',
            type: 'Behavior Therapy',
            duration: '30 mins',
            details: ['Reinforcement learning', 'Reward-based tasks', 'Eye contact training'],
          },
          {
            time: '3:30 PM',
            title: 'Snack',
            type: 'Diet',
            details: ['Follow evening snack from diet chart'],
          },
          {
            time: '4:00 PM',
            title: 'Social Interaction Practice',
            type: 'Social Skills',
            details: ['Play with sibling/parent', 'Turn-taking games'],
          },
          {
            time: '5:00 PM',
            title: 'Sensory Integration Therapy',
            type: 'Sensory Therapy',
            details: ['Swinging or trampoline', 'Sand play or water play'],
          },
        ],
      },
      {
        block: 'Evening Routine',
        window: '6:00 PM - 10:00 PM',
        items: [
          {
            time: '6:30 PM',
            title: 'Light Activity',
            type: 'Calm Engagement',
            details: ['Drawing and coloring'],
          },
          {
            time: '7:30 PM',
            title: 'Dinner',
            type: 'Diet',
            details: ['Follow dinner plan from diet chart'],
          },
          {
            time: '8:15 PM',
            title: 'Relaxation Therapy',
            type: 'Relaxation',
            details: ['Deep breathing', 'Calm music', 'Storytelling'],
          },
          {
            time: '9:00 PM',
            title: 'Sleep Routine',
            type: 'Sleep Hygiene',
            details: ['Fixed sleep time', 'No screens', 'Dim lights'],
          },
        ],
      },
    ],
    diet: [
      {
        slot: 'Breakfast',
        time: '7:30 AM',
        focus: 'Protein + slow carbs',
        items: ['Vegetable upma or oats porridge', '1 boiled egg or paneer cubes', 'Milk (or lactose-free if sensitive)'],
      },
      {
        slot: 'Mid-Morning Snack',
        time: '10:30 AM',
        focus: 'Energy + brain function',
        items: ['Banana or apple slices', 'Handful of nuts (if no allergy)'],
      },
      {
        slot: 'Lunch',
        time: '12:30 PM',
        focus: 'Balanced nutrition',
        items: ['Roti + dal + vegetable sabzi', 'Curd for gut health', 'Small portion rice'],
      },
      {
        slot: 'Evening Snack',
        time: '3:30 PM',
        focus: 'Sustained energy',
        items: ['Peanut butter sandwich or sprouts', 'Fresh juice (no added sugar)'],
      },
      {
        slot: 'Dinner',
        time: '7:30 PM',
        focus: 'Easy digestion',
        items: ['Khichdi or light roti + sabzi', 'Vegetable or chicken soup'],
      },
      {
        slot: 'Before Bed (Optional)',
        time: '9:15 PM',
        focus: 'Improved sleep',
        items: ['Warm milk with turmeric'],
      },
    ],
    guidelines: {
      avoid: ['Excess sugar', 'Processed food', 'Artificial colors'],
      include: ['Omega-3 foods (walnuts, flax seeds)', 'Hydration throughout day', 'Consistent meal timing'],
    },
  },
}

