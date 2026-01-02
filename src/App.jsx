import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  User, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  FolderGit2, 
  BookOpen, 
  Globe2,
  QrCode,
  CheckCircle2
} from 'lucide-react';

import headshot from '@/assets/headshot.png';
import './i18n';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="min-h-screen py-10 px-4 flex flex-col items-center bg-[#f2f4f3]">
      
      {/* 頂部語言切換工具列 */}
      <div className="w-full max-w-[1000px] flex justify-end mb-4 no-print">
        <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-sage-200">
          <Globe2 size={14} className="text-sage-600" />
          <div className="flex gap-4">
            {['zh', 'en', 'jp'].map((lang) => (
              <button
                key={lang}
                onClick={() => changeLanguage(lang)}
                className={`text-[11px] font-black uppercase tracking-widest transition-colors ${
                  i18n.language === lang ? 'text-sage-600' : 'text-slate-400 hover:text-sage-400'
                }`}
              >
                {lang === 'zh' ? '繁中' : lang === 'en' ? 'EN' : 'JP'}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white w-full max-w-[1000px] shadow-2xl flex flex-col md:flex-row relative overflow-hidden min-h-[1100px]">
        
        {/* 右上角斜紋裝飾 */}
        <div className="diagonal-stripes" />

        {/* 左側欄 (30%) */}
        <aside className="w-full md:w-[32%] bg-sage-50 p-8 z-10 space-y-10 border-r border-slate-100">
          
          {/* 個人照片 */}
          <div className="flex justify-center">
            <div className="w-40 h-40 rounded-full border-4 border-white shadow-md overflow-hidden bg-white">
              <img 
                src={headshot} 
                alt="Ivan Chen headshot" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* 基礎信息 */}
          <div>
            <h3 className="flag-title">{t('about.title')}</h3>
            <div className="space-y-4 px-2">
              <div className="flex items-start gap-3">
                <User size={16} className="text-sage-500 mt-1 shrink-0" />
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t('about.name_label')}</p>
                  <p className="text-sm font-medium">{t('about.name')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-sage-500 mt-1 shrink-0" />
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t('about.residence_label')}</p>
                  <p className="text-sm font-medium">{t('about.residence')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* 聯繫方式 */}
          <div>
            <h3 className="flag-title">{t('nav.contact')}</h3>
            <div className="space-y-4 px-2">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-sage-500 shrink-0" />
                <p className="text-[13px] font-medium break-all">sointheuniverse0160@gmail.com</p>
              </div>
            </div>
          </div>

          {/* 專長技能 */}
          <div>
            <h3 className="flag-title">{t('nav.skills')}</h3>
            <div className="space-y-6 px-2">
              <div>
                <p className="text-[11px] font-bold text-sage-600 uppercase mb-2 flex items-center gap-1">
                   {t('skills.ml')}
                </p>
                <p className="text-[12px] text-slate-500 leading-relaxed">{t('skills.others')}</p>
              </div>
              <div>
                <p className="text-[11px] font-bold text-sage-600 uppercase mb-2">{t('skills.programming')}</p>
                <div className="space-y-2">
                   <div>
                     <span className="text-[10px] text-slate-400 uppercase block">{t('skills.major')}</span>
                     <p className="text-[12px] font-medium">{t('skills.langs_major')}</p>
                   </div>
                   <div>
                     <span className="text-[10px] text-slate-400 uppercase block">{t('skills.minor')}</span>
                     <p className="text-[12px] font-medium">{t('skills.langs_minor')}</p>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* 專業證照 & 外語 */}
          <div>
            <h3 className="flag-title">{t('skills.certification')}</h3>
            <ul className="space-y-3 px-2">
              {t('skills.cert_items', { returnObjects: true }).map(cert => (
                <li key={cert} className="text-[12px] text-slate-600 flex items-start gap-2">
                  <CheckCircle2 size={12} className="text-sage-400 mt-0.5 shrink-0" /> {cert}
                </li>
              ))}
            </ul>
            <div className="mt-6 px-2">
              <p className="text-[11px] font-bold text-sage-600 uppercase mb-3">{t('skills.foreign_lang')}</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-[12px]">
                  <span className="text-slate-500">English (TOEIC)</span>
                  <span className="font-bold">655</span>
                </div>
                <div className="flex justify-between items-center text-[12px]">
                  <span className="text-slate-500">Japanese (JLPT)</span>
                  <span className="font-bold">N2</span>
                </div>
              </div>
            </div>
          </div>

          {/* 底部裝飾 */}
          <div className="pt-6 border-t border-slate-200 flex items-center justify-center opacity-30">
            <QrCode size={48} className="text-slate-400" />
          </div>

        </aside>

        {/* 右側主欄 (70%) */}
        <main className="flex-1 bg-white p-12 z-10 space-y-12">
          
          {/* Header */}
          <div className="border-b-4 border-sage-400 pb-6 mb-10">
            <h1 className="text-5xl font-black text-slate-800 tracking-tight mb-2">
              {t('about.name')}
            </h1>
            <h2 className="text-xl font-bold text-sage-500 tracking-[0.2em] uppercase">
              AI Software Engineer
            </h2>
          </div>

          {/* 教育背景 */}
          <section>
            <h3 className="section-title-right">
              <GraduationCap size={20} /> {t('about.education_label')}
            </h3>
            <div className="pl-7">
               <p className="text-base font-bold text-slate-800">{t('about.education')}</p>
            </div>
          </section>

          {/* 業界經驗 / 工作經歷 */}
          <section>
            <h3 className="section-title-right">
              <Briefcase size={20} /> {t('experience.title')}
            </h3>
            <div className="space-y-8 pl-1">
              {t('experience.items', { returnObjects: true }).map((item, idx) => {
                const parts = item.split(' (');
                const content = parts[0];
                const time = parts[1] ? parts[1].replace(')', '') : '';
                
                return (
                  <div key={idx} className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-36 shrink-0 text-sm font-bold text-sage-600 pt-0.5">
                      {time.split(',')[0]}
                    </div>
                    <div className="flex-1">
                      <p className="text-base font-bold text-slate-800 mb-1">{content}</p>
                      {time.includes(',') && <p className="text-[12px] text-slate-400 italic mb-2">{time.split(',')[1]}</p>}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 講師經驗表格 */}
            <div className="mt-8 pl-7">
              <p className="text-sm font-bold text-slate-700 mb-4 uppercase tracking-wider">{t('experience.teaching')}</p>
              <div className="border border-slate-100 rounded-lg overflow-hidden">
                <table className="w-full text-left text-[12px]">
                  <thead className="bg-sage-50 border-b border-slate-100">
                    <tr>
                      {t('experience.teaching_table.headers', { returnObjects: true }).map((h, i) => (
                        <th key={i} className="py-2 px-4 font-bold text-sage-600">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {t('experience.teaching_table.rows', { returnObjects: true }).map((row, i) => (
                      <tr key={i}>
                        {row.map((cell, j) => (
                          <td key={j} className="py-2 px-4 text-slate-600">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* 專案經歷 */}
          <section>
            <h3 className="section-title-right">
              <FolderGit2 size={20} /> {t('projects.title')}
            </h3>
            <div className="space-y-6 pl-7">
              {t('projects.rows', { returnObjects: true }).map((row, i) => (
                <div key={i} className="group">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-black text-sage-400 uppercase tracking-widest">{row[0]}</span>
                    <div className="h-[1px] flex-1 bg-slate-100" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-800 mb-1 group-hover:text-sage-600 transition-colors">{row[1]}</h4>
                  <p className="text-[12px] text-slate-500 leading-relaxed">{row[2]}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 相關論文 */}
          <section>
            <h3 className="section-title-right">
              <BookOpen size={20} /> {t('publications.title')}
            </h3>
            <ul className="space-y-4 pl-7">
              {t('publications.items', { returnObjects: true }).map((item, idx) => (
                <li key={idx} className="text-[12px] text-slate-600 leading-relaxed italic border-l-2 border-sage-200 pl-4 py-1">
                  {item}
                </li>
              ))}
            </ul>
          </section>

        </main>
      </div>
    </div>
  );
}

export default App;