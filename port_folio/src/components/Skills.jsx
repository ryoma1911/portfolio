const skills = [
  {
    title: 'HTML / CSS',
    level: '経験：1年',
    description: '基本的なマークアップとスタイリングが可能。<br />レスポンシブ対応やFlexboxも理解。',
  },
  {
    title: 'JavaScript / React',
    level: '経験：1年',
    description: 'Reactを用いたコンポーネント設計・状態管理を学習中。<br />基本的なSPA構築に対応可能。',
  },
  {
    title: 'VBA',
    level: '経験：6年',
    description: 'RPAツールと連動させる事で画面操作無しで自動化処理を実現。<br />現職の実務で最も使用しています。',
  },
  {
    title: 'Blue Prism',
    level: '経験：6年',
    description: 'RPAツールの一つ。これを活用した業務自動化を現職では行なっています。<br />VBA,Web APIの連携も可能でパフォーマンスや運用コストの削減も経験。',
    background: '/images/SSC-blueprism-2col-logo-rgb-updated-whitespace.svg',
  },
  {
    title: 'Go / Python',
    level: '経験：1年',
    description: '個人開発でAPI構築やスクレイピング等に活用。<br />パフォーマンスと設計を意識。',
  },
  {
    title: 'Docker / AWS',
    level: '経験：2年',
    description: 'Dockerによるコンテナ化、ECS+RDS構成でのインフラ構築経験あり（野球速報APIで使用）。',
  },
];

const Skills = () => (
  <section style={styles.section} id="skills">
    <div style={styles.inner}>
      <h2 style={styles.heading}>Skills - スキル</h2>
      <div style={styles.cardContainer}>
        {skills.map((skill, index) => (
          <div key={index} style={styles.card} className="fade-in">
            <h3 style={styles.cardTitle}>{skill.title}</h3>
            <p style={styles.level}>{skill.level}</p>
            <p style={styles.cardDescription}>
              <span dangerouslySetInnerHTML={{ __html: skill.description }} />
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const styles = {
  section: {
    padding: '5rem 1rem',
    backgroundColor: '#f1f5f9',
  },
  inner: {
    maxWidth: '960px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '3rem',
    textAlign: 'center',
    color: '#0f172a',
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2rem',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '1.5rem 2rem',
    borderRadius: '1rem',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    transition: 'transform 0.3s ease',
  },
  cardTitle: {
    fontSize: '1.4rem',
    color: '#1e293b',
    marginBottom: '0.5rem',
  },
  level: {
    fontSize: '0.95rem',
    color: '#475569',
    fontWeight: 'bold',
    marginBottom: '0.8rem',
  },
  cardDescription: {
    fontSize: '0.95rem',
    color: '#334155',
    lineHeight: '1.6',
  },
};

export default Skills;