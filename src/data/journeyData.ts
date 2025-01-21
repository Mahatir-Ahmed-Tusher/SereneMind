export const moodData = {
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
  datasets: [
    {
      label: 'Mood Score',
      data: [65, 72, 68, 82],
      fill: false,
      borderColor: 'rgb(99, 102, 241)',
      tension: 0.1,
    },
  ],
};

export const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Your Wellness Journey',
    },
  },
  scales: {
    y: {
      min: 0,
      max: 100,
    },
  },
};

export const achievements = [
  {
    title: "7-Day Streak",
    description: "Completed daily check-ins for a week",
    date: "2024-03-15",
    icon: "Star",
  },
  {
    title: "Mindfulness Master",
    description: "Completed 10 meditation sessions",
    date: "2024-03-12",
    icon: "Brain",
  },
  {
    title: "Progress Pioneer",
    description: "Showed consistent mood improvement",
    date: "2024-03-10",
    icon: "Activity",
  },
];

export const monthlyHighlights = [
  {
    date: "March 2024",
    title: "Major Improvement",
    description: "Achieved consistent daily meditation practice",
  },
  {
    date: "February 2024",
    title: "New Milestone",
    description: "Started regular exercise routine",
  },
  {
    date: "January 2024",
    title: "Journey Began",
    description: "Started tracking mental wellness",
  },
];