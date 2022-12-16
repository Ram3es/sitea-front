type TQuestion = { title: string; description: string; name: string };

export interface IInitState {
  compateble: boolean;
  private: boolean;
  health: boolean;
  hardware: boolean;
}

export const INITIAL_STATE: IInitState = {
  compateble: false,
  private: false,
  health: false,
  hardware: false,
};

export const FAQ_QUESTIONS: TQuestion[] = [
  {
    title: 'Is SitYEA compatible with my computer?',
    description:
      'SitYEA is compatible with Windows 10 or Linux systems. Your computer should have at least an Intel i5 processor and GPU card.',
    name: 'compateble',
  },
  {
    title: 'What information does it collect about me?',
    description:
      'SitYEA is an offline application, it does not require an internet connection to work and sends only anonymous crash reports if the application fails to launch.',
    name: 'private',
  },
  {
    title: 'Is SitYEA is good for my health?',
    description:
      'Yes, for example: moving just 2 minutes every hour can decrease the premature death risk by 33%.',
    name: 'health',
  },
  {
    title: 'Do I need any hardware to use SitYEA?',
    description:
      'No, SitYEA can work with a computer webcam. But in case you want better accuracy and the ability to work in low light, you can connect Intel ReanSense camera.',
    name: 'hardware',
  },
];
