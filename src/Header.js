import PageHeader from '@atlaskit/page-header';
import { AtlassianNavigation, PrimaryButton } from '@atlaskit/atlassian-navigation';

export function Header() {
  return (
    <header className='header'>
      <PageHeader>Hello, my name is <strong>Camila Lopez</strong></PageHeader>
      <PageHeader>I am a Web Developer</PageHeader>
      <img />
      <AtlassianNavigation
		    label="site"
		    renderProductHome={() => null}
		    primaryItems={[
          <PrimaryButton>About me</PrimaryButton>,
          <PrimaryButton>Education</PrimaryButton>,
          <PrimaryButton>Skills</PrimaryButton>,
          <PrimaryButton>Portfolio</PrimaryButton>,
          <PrimaryButton>Contact</PrimaryButton>
		    ]}
	    />
    </header>
  )
};

