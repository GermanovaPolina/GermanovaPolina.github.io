import React, { useState, useEffect } from 'react';
import { Card, Text, Button, Icon, Link } from '@gravity-ui/uikit';
import { ArrowUpToLine, ArrowUpRightFromSquare } from '@gravity-ui/icons';
import TableOfContents from './TableOfContents';
import './Longread.css';

interface LongreadProps {
  title: string;
  subtitle: string;
  author: string;
  publishDate: string;
}

const Longread: React.FC<LongreadProps> = ({
  title,
  subtitle,
  author,
  publishDate,
}) => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  const tocItems = [
    { id: 'introduction', title: 'Введение', level: 1 },
    { id: 'semantic-web', title: 'Семантическая паутина', level: 1 },
    { id: 'sw-architecture', title: 'Архитектура семантической паутины', level: 2 },
    { id: 'sw-components', title: 'Основные компоненты', level: 2 },
    { id: 'education', title: 'Образование', level: 1 },
    { id: 'vr-ar-education', title: 'VR/AR в образовании', level: 2 },
    { id: 'blockchain-education', title: 'Блокчейн в образовании', level: 2 },
    { id: 'ai-semantic-education', title: 'ИИ и семантические технологии', level: 2 },
    { id: 'personalization', title: 'Персонализация обучения', level: 2 },
    { id: 'risks', title: 'Риски и вызовы', level: 2 },
    { id: 'conclusion', title: 'Заключение', level: 1 },
    { id: 'sources', title: 'Источники', level: 1 }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);

      // Update active section based on scroll position
      const sections = tocItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(tocItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="longread-container">
      <div className="longread-sidebar">
        <TableOfContents
          items={tocItems}
          activeSection={activeSection}
          onSectionClick={scrollToSection}
        />
      </div>

      <div className="longread-content">
        {/* Header */}
        <header className="longread-header">
          <Text variant="display-1" className="longread-title">
            {title}
          </Text>
          <Text variant="header-1" className="longread-subtitle">
            {subtitle}
          </Text>
          <div className="longread-meta">
            <Text variant="body-2" color="secondary">
              Автор: {author} • {publishDate}
            </Text>
          </div>
        </header>

        {/* Introduction */}
        <section id="introduction" className="longread-section">
          <Text variant="header-2" className="section-title" as="div">
            Введение
          </Text>
          <div className="section-content">
            <Text variant="body-1" className="paragraph">
              Жизнь человека значительно изменилась с появлением инфокоммуникационных технологий.
              В настоящее время большим изменением является переход от пассивного потребления к созданию
              и «владению» контента, децентрализации информации. Стали распространены облачные вычисления,
              Интернет вещей, мобильные технологии и многое другое. Эти технологии становятся базовой
              инфраструктурой для обработки и передачи данных. В социальной сфере меняется общение,
              труд и досуг, где центральным аспектом становятся цифровые продукты.
            </Text>

            <div className="image-container">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Цифровые технологии и сети"
                className="section-image"
              />
              <Text variant="caption-2" className="image-caption">
                Современные цифровые технологии формируют новую парадигму взаимодействия
              </Text>
            </div>

            <Text variant="body-1" className="paragraph">
              Также цифровизация происходит и в таких критически важных сферах, как финансовые услуги,
              транспорт, здравоохранения, безопасность и государственное управления. Такая цифровая
              экономика представляет из себя хозяйственную деятельность, в которой главным фактором
              производства являются цифровые данные. Их обработка и использование повышают эффективность
              различных отраслей.
            </Text>

            <Text variant="body-1" className="paragraph">
              Интернет-технологии играют главную роль в распространенной цифровой экономике. Например,
              через внедрение технологий больших данных и облачных вычислений происходит оптимизация
              бизнес-процессов и создание новых бизнес-моделей. Принимает особую важность сфера
              кибербезопасности и защиты данных для развития цифровой экономики.
            </Text>

            <Text variant="body-1" className="paragraph">
              В промышленности же появляется термин «Индустрия 4.0» -- четвертая промышленная революция.
              Это есть переход к полностью автоматизированному и киберфизическому производству.{' '}
              <Link href="https://cyberleninka.ru/article/n/industriya-4-0-konkurentsiya-za-aktualnost" target="_blank">
                [1] <Icon data={ArrowUpRightFromSquare} size={12} />
              </Link>{' '}
              Такому подходу свойственны «умные фабрики», где сосуществуют физические и виртуальные пространства.
            </Text>

            <div className="highlight-box">
              <Text variant="body-1" className="highlight-text">
                Одними из перспективных направлений Индустрии 4.0 являются: промышленный интернет вещей,
                который обеспечивает связь оборудования и цифровых систем; облачные вычисления, которые
                осуществляют параллельную обработку данных с производства; цифровые двойники, которые
                являются копиями физических моделей и используются для оптимизации производственных процессов.
              </Text>
            </div>

            <Text variant="body-1" className="paragraph">
              В Интернете тоже происходит революция – переход к концепту Web 3.0. Это новая парадигма,
              основанная на создании связанной и децентрализированной интеллектуальной цифровой среды.
              В том числе предполагается, что сеть будет доступна и читаема не только для человека,
              но и для машины. Таким образом появятся новые возможности для автоматизированной обработки
              информации и более точного поиска.
            </Text>

            <Text variant="body-1" className="paragraph">
              Ключевыми технологиями Web 3.0 являются семантическая паутина для машиночитаемости Интернета;
              блокчейн технологии для децентрализации хранения данных; машинное обучение для создания
              интеллектуальных сервисов и персональных ассистентов.
            </Text>
          </div>
        </section>

        {/* Semantic Web */}
        <section id="semantic-web" className="longread-section">
          <Text variant="header-2" className="section-title" as="div">
            Семантическая паутина
          </Text>
          <div className="section-content">
            <Text variant="body-1" className="paragraph">
              Парадигма Web 3.0 заключается в новом способе построения Интернета, где данные являются
              не просто текстом и картинками для человека, а структурированной, связанной и
              машиночитаемой информацией. Итинсон К. С. выделяет четыре основные характеристики
              технологий Web 3.0: интеллект, персонализация, совместимость и виртуализация.{' '}
              <Link href="https://cyberleninka.ru/article/n/web-3-0-tehnologii-v-obrazovanii-i-nauchnyh-issledovaniyah" target="_blank">
                [2] <Icon data={ArrowUpRightFromSquare} size={12} />
              </Link>
            </Text>

            <Text variant="body-1" className="paragraph">
              Блокчейн используется для хранения и управления децентрализированной информации,
              искусственный интеллект для анализа и персонализации данных, иммерсивные технологии
              VR и AR для создания виртуальных сред. Однако центральной технологией Web 3.0 является
              Семантическая паутина (Semantic Web).
            </Text>

            <div className="highlight-box">
              <Text variant="body-1" className="highlight-text">
                Семантическая паутина – общедоступная сеть, сформированная на базе Всемирной паутины
                при помощи преобразования и закрепления стандартов представления информации в
                машиночитаемом виде.{' '}
                <Link href="https://www.w3.org/DesignIssues/Semantic.html" target="_blank">
                  [3] <Icon data={ArrowUpRightFromSquare} size={12} />
                </Link>
              </Text>
            </div>

            <Text variant="body-1" className="paragraph">
              Основная идея, сформулированная Тимом Бернерсом-Ли, заключается в том, чтобы сделать
              информацию, размещенную в Интернете, доступной не только для чтения людям, но и для
              анализа и преобразования программными методами.
            </Text>

            <div id="sw-architecture" className="subsection">
              <Text variant="subheader-1" className="subsection-title">
                Архитектура семантической паутины.
              </Text>
              <Text variant="body-1" className="paragraph">
                Архитектуру семантической паутины описывают в виде «слоеного пирога» (Semantic Web Layer Cake),
                где каждый уровень добавляет новый функционал. Основные компоненты архитектуры семантической паутины:
              </Text>
            </div>

            <div className="image-container">
                <img
                  src="https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&h=400&fit=crop"
                  alt="Архитектура семантической паутины"
                  className="section-image"
                />
                <Text variant="caption-2" className="image-caption">
                  Многоуровневая архитектура семантической паутины
                </Text>
            </div>

              <Text variant="subheader-1" className="subsection-title">
                Основные компоненты архитектуры
              </Text>

              <div className="components-grid">
                <Card className="component-card">
                  <Text variant="subheader-1" className="subsection-title">1. URI и IRI.</Text>
                  <Text variant="body-2">
                    Уникальные идентификаторы (URI и IRI) являются фундаментом семантической паутины,
                    так как обеспечивают глобальную уникальную идентификацию ресурса. Этим ресурсом
                    может быть не только веб-страница, но и человек, организация или абстрактное понятие.
                    URI являются однозначными, не зависят от физического адреса и его изменения.
                  </Text>
                </Card>

                <Card className="component-card">
                  <Text variant="subheader-1" className="subsection-title">2. RDF.</Text>
                  <Text variant="body-2">
                    Модель данных RDF (Resource Description Framework) -- это способ представления данных
                    в виде «субъект-предикат-объект». Субъект обозначает ресурс, предикат -- характеристику,
                    объект -- значение свойства. Например, статья (субъект) имеет автора (предикат)
                    Иванова А. А. (объект). При помощи этой модели возможно создавать распределенные графы знаний.
                  </Text>
                </Card>

                <Card className="component-card">
                  <Text variant="subheader-1" className="subsection-title">3. RDFS.</Text>
                  <Text variant="body-2">
                    Словари RDF Schema (RDFS) предоставляют базовый словарь для описания терминов и создания
                    иерархий классов и свойств. С его помощью можно определять классы (rdfs:Class),
                    подклассы (rdfs:subClassOf), свойства (rdfs:Property) и домены свойств. Словарь становится
                    базой для установления семантических отношений между ресурсами.
                  </Text>
                </Card>

                <Card className="component-card">
                  <Text variant="subheader-1" className="subsection-title">4. OWL.</Text>
                  <Text variant="body-2">
                    Язык онтологий OWL (Web Ontology Language) расширяет возможности RDFS. Он добавляется
                    конструкции эквивалентности классов (owl:equivalentClass), отрицание (owl:complementOf),
                    объединение (owl:unionOf) и ограничение свойств (owl:restriction).
                  </Text>
                </Card>

                <Card className="component-card">
                  <Text variant="subheader-1" className="subsection-title">5. SPARQL.</Text>
                  <Text variant="body-2">
                    SPARQL -- это язык запросов к данным в формате RDF и на подобие SQL позволяет
                    извлекать и манипулировать данными из распределенных графов знаний.
                  </Text>
                </Card>

                <Card className="component-card">
                  <Text variant="subheader-1" className="subsection-title">6. Логический вывод.</Text>
                  <Text variant="body-2">
                    Вершиной «слоеного пирога» являются механизмы логического вывода (reasoners),
                    которые используют формальную логику для получения новых знаний из существующих данных.
                  </Text>
                </Card>
              </div>

              <Text variant="body-1" className="paragraph">
                Несмотря на потенциал семантической паутины, до сих пор отсутствуют массовые средства
                для просмотра и использования семантической информации. Для преодоления этого барьера
                важной является интеграция семантических технологий в разработку и систему управления
                контентом для накопления семантической информации в Сети.
              </Text>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="longread-section">
          <Text variant="header-2" className="section-title" as="div">
            Образование
          </Text>
          <div className="section-content">
            <Text variant="body-1" className="paragraph">
              Одной из перспективных и социально значимых сфер применения технологий Web 3.0 является образование.
              От школ до университетов в обучение внедряются интернет-технологии.{' '}
              <Link href="https://cyberleninka.ru/article/n/vliyanie-internet-tehnologiy-na-razvitie-sovremennoy-sistemy-obrazovaniya" target="_blank">
                [4] <Icon data={ArrowUpRightFromSquare} size={12} />
              </Link>{' '}
              Целью этих технологий является стать основой для более персонализированного и интерактивного обучения.
            </Text>

            <div id="vr-ar-education" className="subsection">
              <Text variant="subheader-1" className="subsection-title">
                VR/AR в образовании.
              </Text>
              <Text variant="body-1" className="paragraph">
                В обучении виртуальная и дополненная реальность обеспечивает эффект погружения.
                Платформы вроде Varwin Education позволяют создавать виртуальные лаборатории по химии и физике,
                виртуальные экскурсии по историческим местам, интерактивные 3D-модели для изучения анатомии
                или стереометрии.{' '}
                <Link href="https://varwin.com/ru/education/vr-obrazovanie/" target="_blank">
                  [5] <Icon data={ArrowUpRightFromSquare} size={12} />
                </Link>
              </Text>
            </div>

            <div className="image-container">
                <img
                  src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&h=400&fit=crop"
                  alt="VR в образовании"
                  className="section-image"
                />
            </div>

            <div id="blockchain-education" className="subsection">
              <Text variant="subheader-1" className="subsection-title">
                Блокчейн в образовании.
              </Text>
              <Text variant="body-1" className="paragraph">
                Технологии блокчейн применяются для создания невозможных к подделке цифровых дипломов и сертификатов.{' '}
                <Link href="https://coinspaidmedia.com/ru/learn/how-web3-technologies-transform-education/" target="_blank">
                  [6] <Icon data={ArrowUpRightFromSquare} size={12} />
                </Link>{' '}
                Таким образом упрощаются процесс выдачи документов об образовании и процедуры их верификации.
                Появляется возможность автоматизировать систему поступлений.
              </Text>

              <Text variant="body-1" className="paragraph">
                Такие проекты, как EduDAO и ODEM реализуют модель децентрализированных автономных организаций (DAO).
                Они позволяют студентам и преподавателям взаимодействовать напрямую, совместно управлять платформой
                и получать финансирование.{' '}
                <Link href="https://coinspaidmedia.com/ru/learn/how-web3-technologies-transform-education/" target="_blank">
                  [6] <Icon data={ArrowUpRightFromSquare} size={12} />
                </Link>
              </Text>
            </div>

            <div id="ai-semantic-education" className="subsection">
              <Text variant="subheader-1" className="subsection-title">
                ИИ и семантические технологии.
              </Text>
              <Text variant="body-1" className="paragraph">
                Семантические технологии позволяют создать основу для интеллектуальных обучающих систем
                и персонализированных образовательных траекторий.{' '}
                <Link href="https://cyberleninka.ru/article/n/web-3-0-tehnologii-v-obrazovanii-i-nauchnyh-issledovaniyah" target="_blank">
                  [2] <Icon data={ArrowUpRightFromSquare} size={12} />
                </Link>{' '}
                Система, которая «понимает» смысл учебных материалов и знаний конкретного ученика,
                может автоматически подбирать необходимые ресурсы, предлагать индивидуальные задания.
                Семантические библиотеки предоставляют интеллектуальный поиск, который ускоряют работу
                с информацией ученикам и учителям.
              </Text>

              <Text variant="body-1" className="paragraph">
                Наиболее перспективной технологией Web 3.0 в образовательной сфере является ИИ в связке
                с семантической паутиной. Семантическая паутина решает одну из главных задач современного
                образования -- персонализация, которая просто масштабируется. Она позволяет перейти от
                обобщенных учебных программ к адаптивным образовательным средам. Такие среды гибко
                подстраиваются под темп, возможности и уровень знаний каждого учащегося.
              </Text>
            </div>

              <div className="image-container">
                <img
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop&crop=center"
                  alt="ИИ в образовании"
                  className="section-image"
                />
              </div>

              <Text variant="subheader-1" className="subsection-title">
                Персонализация обучения
              </Text>
              <Text variant="body-1" className="paragraph">
                Искусственный интеллект позволяет создать «цифрового двойника» знаний каждого ученика.
                Система создает семантический профиль знаний, постоянно анализируя, какие темы он изучил,
                какие задачи решил, какие ошибки допустил. Все учебные ресурсы в такой системе имеют
                семантическую разметку, а ИИ связывает профиль ученика с предоставленными ресурсами.
              </Text>

              <Text variant="body-1" className="paragraph">
                В виде примера таких технологий можно предоставить интеллектуальный контекстный поиск.
                По запросу из миллиона ссылок ученик получает релевантный персонализированный ответ,
                который учитывает связанные темы, уровень сложности и тип ресурса.
              </Text>

              <div className="components-grid">
                <Card className="component-card">
                  <Text variant="subheader-1"  className="subsection-title">«Умные» учебники.</Text>
                  <Text variant="body-2">
                    Учебники не просто являются текстом, а меняют примеры и задачи в реальном времени
                    в зависимости от интересов студента, автоматически обновляют устаревшую информацию
                    из семантически связанных источников, предлагают альтернативные объяснения для
                    сложных тем, которые ученик не понял с первого раза.
                  </Text>
                </Card>

                <Card className="component-card">
                  <Text variant="subheader-1" className="subsection-title">Междисциплинарное обучение.</Text>
                  <Text variant="body-2">
                    Семантическая паутина связывает данные из разных областей, что может стать основой
                    для междисциплинарного обучения. Например, при прочтении книги система может
                    предложить исторический или философский контекст вдобавок литературному.
                  </Text>
                </Card>

                <Card className="component-card">
                  <Text variant="subheader-1" className="subsection-title">Цифровой двойник знаний.</Text>
                  <Text variant="body-2">
                    Система создает семантический профиль знаний каждого ученика, анализируя его прогресс
                    и автоматически подбирая персонализированные образовательные ресурсы и траектории обучения.
                  </Text>
                </Card>
              </div>

            <div id="risks" className="subsection">
              <Text variant="subheader-1" className="subsection-title">
                Риски и вызовы.
              </Text>
              <Text variant="body-1" className="paragraph">
                Внедрение технологий Web 3.0 в образование сталкивается с рядом рисков, таких как отсутствие
                общепринятых проверенных стандартов, появление некачественного контента, низкая осведомленность
                участников образовательного процесса. Также остро стоит вопрос цифрового неравенства, когда
                не все люди имеют доступ к необходимому оборудованию и интернету.
              </Text>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section id="conclusion" className="longread-section">
          <Text variant="header-2" className="section-title" as="div">
            Заключение
          </Text>
          <div className="section-content">
            <Text variant="body-1" className="paragraph">
              В данном материале был рассмотрен текущий этап развития интернет-технологий в контексте
              применения Web 3.0 технологий. Было установлено, что этот концепт тесно взаимосвязан с
              трендами цифровой экономики и Индустрии 4.0 и уже применяется во многих социальных,
              бизнес и государственных отраслях.
            </Text>

            <Text variant="body-1" className="paragraph">
              В рамках работы детально была исследована одна из ключевых технологий Web 3.0 -- семантическая паутина.
              Были раскрыты ее архитектура, базовые принципы (онтологии, URI, RDF) и потенциал для машинной
              обработки и обучения, а также обозначены существующие проблемы ее реализации.
            </Text>

            <Text variant="body-1" className="paragraph">
              В качестве области применения технологий Web 3.0 была выбрана сфера образования. Блокчейн,
              VR/AR и децентрализированные платформы уже начинают преобразовывать образовательный процесс.
              Наиболее важными технологиями для будущего образования были выделены искусственный интеллект
              и семантическая паутина, которые осуществляют персонализированный подход к обучению.
            </Text>

            <div className="conclusion-highlights">
              <Card className="conclusion-card">
                <Text variant="subheader-1" className="subsection-title">Ключевые выводы</Text>
                <ul className="conclusion-list">
                  <li>Семантическая паутина является центральной технологией Web 3.0</li>
                  <li>ИИ и семантические технологии открывают новые возможности для персонализации образования</li>
                  <li>Архитектура семантической паутины включает шесть основных уровней: от URI до логического вывода</li>
                  <li>VR/AR, блокчейн и DAO-модели уже трансформируют образовательный процесс</li>
                  <li>Для успешного внедрения необходимо уделить особое внимание разработке стандартов, созданию качественного контента и преодолению цифрового разрыва</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Sources */}
        <section id="sources" className="longread-section">
          <Text variant="header-2" className="section-title" as="div">
            Источники
          </Text>
          <div className="section-content">
            <div className="sources-list">
              <div className="source-item">
                <Text variant="body-2">
                  <Link href="https://cyberleninka.ru/article/n/industriya-4-0-konkurentsiya-za-aktualnost" target="_blank">
                  1. Водопьян Е.А. Индустрия 4.0: конкуренция за актуальность // Креативная экономика. – 2022.{' '}
                    <Icon data={ArrowUpRightFromSquare} size={12} />
                  </Link>
                </Text>
              </div>

              <div className="source-item">
                <Text variant="body-2">
                  <Link href="https://cyberleninka.ru/article/n/web-3-0-tehnologii-v-obrazovanii-i-nauchnyh-issledovaniyah" target="_blank">
                  2. Итинсон К.С. Web 3.0-технологии в образовании и научных исследованиях // Вестник науки. – 2020.{' '}
                    <Icon data={ArrowUpRightFromSquare} size={12} />
                  </Link>
                </Text>
              </div>

              <div className="source-item">
                <Text variant="body-2">
                  <Link href="https://www.w3.org/DesignIssues/Semantic.html" target="_blank">
                  3. Berners-Lee T. Semantic Web // The World Wide Web Consortium (W3C).{' '}
                    <Icon data={ArrowUpRightFromSquare} size={12} />
                  </Link>
                </Text>
              </div>

              <div className="source-item">
                <Text variant="body-2">
                  <Link href="https://cyberleninka.ru/article/n/vliyanie-internet-tehnologiy-na-razvitie-sovremennoy-sistemy-obrazovaniya" target="_blank">
                  4. Стрижаченко Ю.А. Влияние интернет-технологий на развитие современной системы образования.{' '}
                    <Icon data={ArrowUpRightFromSquare} size={12} />
                  </Link>
                </Text>
              </div>

              <div className="source-item">
                <Text variant="body-2">
                  <Link href="https://varwin.com/ru/education/vr-obrazovanie/" target="_blank">
                  5. VR-образование // Varwin.{' '}
                    <Icon data={ArrowUpRightFromSquare} size={12} />
                  </Link>
                </Text>
              </div>

              <div className="source-item">
                <Text variant="body-2">
                  <Link href="https://coinspaidmedia.com/ru/learn/how-web3-technologies-transform-education/" target="_blank">
                  6. Как технологии Web3 меняют систему образования // CoinsPaidMedia.{' '}
                    <Icon data={ArrowUpRightFromSquare} size={12} />
                  </Link>
                </Text>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <Button
          className="scroll-top-btn"
          view="flat-info"
          size="l"
          onClick={scrollToTop}
        >
          <Icon data={ArrowUpToLine} size={20} />
        </Button>
      )}
    </div>
  );
};

export default Longread;
