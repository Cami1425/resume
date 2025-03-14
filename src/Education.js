import { Accordion } from './Accordion';
import Heading from '@atlaskit/heading';
import { Flex, Stack } from '@atlaskit/primitives';
import { data } from './data';

export function Education () {
	return (
		<Stack space="space.500">
			<Stack space="space.100">
        <Flex gap="space.500" justifyContent='center'>
          <section>
            <Heading size="xsmall">
              Northern Virginia Community College
            </Heading>
            
            <p>2021 - 2024</p> 
            <p>AAS-Information Systems Technology Major</p> 
            <p>CSC-Web Design and Development Certificate</p> 
            <p>GPA: 3.9</p> 
          </section>
          <section>
            <Heading size="xsmall">
              Continuous Growth
            </Heading>
          </section>
          
          {
            data.map(item => <Accordion title={item.title} content={item.content} /> )
          }
        </Flex>
			</Stack>
		</Stack>
	);
};