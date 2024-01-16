import { shallowMount } from '@vue/test-utils'
import Menu from '../components/Menu.vue'
import menuItems from '../utility/menuHelper'

describe('Menu.vue', () => {
	let wrapper;
	
	beforeEach(() => {
		wrapper = shallowMount(Menu, {
			global: {
				mocks: {
					$route: {
						path: '/',
						name: 'home'
					},
					$router: {
						push: jest.fn()
					}
				}
			}
		})
	})
	
	it('renders the correct number of menu items', () => {
		const items = wrapper.findAll('.nav-item')
		expect(items).toHaveLength(menuItems.length)
	});
	
	it('renders menu items with correct text and link', () => {
		menuItems.forEach((item, index) => {
			const menuItem = wrapper.findAll('.nav-link').at(index)
			expect(menuItem.text()).toBe(item.name)
			expect(menuItem.attributes('to')).toBe(item.path)
		})
	})
})

