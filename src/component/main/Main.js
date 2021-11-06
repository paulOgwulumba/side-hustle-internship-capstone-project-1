import InputProvider from '../../context/InputContext';
import ChangeLanguage from '../changeLanguage/ChangeLanguage';
import Input from '../Input/Input';
import Label from '../Label/Label';
import Tags from '../tags/Tags';
import classess from './Main.module.css';

const tags = ['Sidehustle intern', 'best internship'];
const languageData = [
  { languageName: 'Igbo', source: '#' },
  { languageName: 'Ede yoruba', source: '#' },
  { languageName: 'Hausa', source: '#' },
  { languageName: 'Nigeria Pigin', source: '#' },
];

const Main = () => {
  return (
    <main className={classess.Main}>
      <InputProvider>
        <Label />
        <div className={classess.SearchArea}>
          <Input />
          <Tags tagTitles={tags} />
          <ChangeLanguage languageData={languageData} />
        </div>
      </InputProvider>
    </main>
  );
};

export default Main;
