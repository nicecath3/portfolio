import './sectionHeader.scss';

interface propsType {
  title: string;
}

export const SectionHeader = (props: propsType) => {
  const { title } = props;

  return (
    <div style={{ marginBottom: '60px' }}>
      <h2 className={'section_title'}> {title} </h2>
      <div className="line-accent" style={{ marginTop: '16px' }} />
    </div>
  );
};
