import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
	SearchBox,
	SearchBoxInput,
	SearchBoxButton,
} from '@ag.ds-next/search-box';
import { Flex } from '@ag.ds-next/box';
import { HeroBanner } from './HeroBanner';
import { Button } from '@ag.ds-next/button';

export default {
	title: 'layout/HeroBanner',
	component: HeroBanner,
} as ComponentMeta<typeof HeroBanner>;

const Template: ComponentStory<typeof HeroBanner> = (args) => (
	<HeroBanner {...args} />
);

const commonArgs = {
	mobileImage: (
		<img
			src="/agds-next/img/placeholder/hero-banner.png"
			style={{ display: 'block', width: '100%', height: 'auto' }}
			alt="Hero image"
		/>
	),
	backgroundImageSrc: '/agds-next/img/placeholder/hero-banner.png',
	title: 'Hero banner title',
	subTitle: 'Hero banner paragraph text',
	children: (
		<SearchBox onSubmit={console.log}>
			<SearchBoxInput label="Search this website" />
			<SearchBoxButton iconOnly={{ xs: true, md: false }}>
				Search
			</SearchBoxButton>
		</SearchBox>
	),
};

export const LightVariant = Template.bind({});
LightVariant.args = {
	...commonArgs,
	variant: 'light',
};

export const LightAlt = Template.bind({});
LightAlt.args = {
	...commonArgs,
	variant: 'lightAlt',
};

export const Dark = Template.bind({});
Dark.args = {
	...commonArgs,
	variant: 'dark',
};

export const DarkAlt = Template.bind({});
DarkAlt.args = {
	...commonArgs,
	variant: 'darkAlt',
};

export const Buttons = Template.bind({});
Buttons.args = {
	title: 'Hero banner title',
	subTitle: 'Hero banner paragraph text',
	children: (
		<Flex flexDirection={{ xs: 'column', md: 'row' }} gap={1}>
			<Button>Primary button</Button>
			<Button variant="secondary">Secondary button</Button>
		</Flex>
	),
};
