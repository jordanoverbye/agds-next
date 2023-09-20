import { Meta } from '@storybook/react';
import { DataProvider, SortAndFilterProvider } from './lib/contexts';
import { useSortAndFilter } from './lib/useSortAndFilter';
import { useData } from './lib/utils';
import { ListFiltering } from './ListFiltering';

const meta: Meta = {
	title: 'Patterns/Data filtering and sorting',
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;

const ListFilteringExample = () => {
	const sortAndFilter = useSortAndFilter();
	const { filters, pagination, sort } = sortAndFilter;
	const data = useData({ filters, pagination, sort });

	return (
		<SortAndFilterProvider value={sortAndFilter}>
			<DataProvider value={data}>
				<ListFiltering />
			</DataProvider>
		</SortAndFilterProvider>
	);
};

export const List = {
	name: 'Card lists',
	render: ListFilteringExample,
};
