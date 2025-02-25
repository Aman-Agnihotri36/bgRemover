

export const testimonialsData = [
  {
    id: 1,
    text: "I've been using bg.removal for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
    author: "Richard Nelson",
    image: '/assets/profile_img_1.png',
    jobTitle: 'Web Developer'
  },
  {
    id: 2,
    text: "I've been using bg.removal for nearly 6 months, I had a fantastic experience. The quality is top-notch. I recommend others to try this app.",
    author: "Donald Jackman",
    image: '/assets/profile_img_2.png',
    jobTitle: 'UI Deginer'
  },
];

export const plans = [
  {
    id: 'Basic',
    price: '10$',
    credits: 100,
    desc: 'Best for personal use.'
  },
  {
    id: 'Advanced',
    price: '50$',
    credits: 500,
    desc: 'Best for business use.'
  },
  {
    id: 'Business',
    price: '100$',
    credits: 1500,
    desc: 'Best for enterprise use.'
  },
]

export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (typeof reader.result === "string") {
        resolve(reader.result);
      } else {
        reject(new Error("Failed to convert file to base64"));
      }
    };
    reader.onerror = error => reject(error);
  });
};
