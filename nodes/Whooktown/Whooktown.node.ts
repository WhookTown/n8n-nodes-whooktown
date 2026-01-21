import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class Whooktown implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Whooktown',
		name: 'whooktown',
		icon: 'file:whooktown.svg',
		group: ['transform'],
		version: 1,
		usableAsTool: true,
		subtitle: '={{$parameter["operation"]}}',
		description: 'Send sensor data to Whooktown',
		defaults: {
			name: 'Whooktown',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'whooktownApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{$credentials.apiUrl}}',
			headers: {
				'Content-Type': 'application/json',
			},
		},
		properties: [
			// Resource
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Sensor',
						value: 'sensor',
					},
				],
				default: 'sensor',
			},
			// Operation
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['sensor'],
					},
				},
				options: [
					{
						name: 'Send Data',
						value: 'send',
						description: 'Send sensor data to Whooktown',
						action: 'Send sensor data',
						routing: {
							request: {
								method: 'POST',
								url: '/sensors',
							},
						},
					},
				],
				default: 'send',
			},
			// Sensor ID (required)
			{
				displayName: 'Sensor ID',
				name: 'sensorId',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['sensor'],
						operation: ['send'],
					},
				},
				default: '',
				placeholder: '1377959e-97ce-46c1-9715-22c34bb9afbe',
				description: 'UUID v4 of the sensor',
				routing: {
					send: {
						type: 'body',
						property: 'id',
					},
				},
			},
			// Status (optional)
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				displayOptions: {
					show: {
						resource: ['sensor'],
						operation: ['send'],
					},
				},
				options: [
					{
						name: 'Online',
						value: 'online',
					},
					{
						name: 'Offline',
						value: 'offline',
					},
					{
						name: 'Warning',
						value: 'warning',
					},
					{
						name: 'Critical',
						value: 'critical',
					},
				],
				default: 'online',
				description: 'Status of the sensor',
				routing: {
					send: {
						type: 'body',
						property: 'status',
					},
				},
			},
			// Additional Fields
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						resource: ['sensor'],
						operation: ['send'],
					},
				},
				options: [
					{
						displayName: 'Activity',
						name: 'activity',
						type: 'options',
						options: [
							{
								name: 'Slow',
								value: 'slow',
							},
							{
								name: 'Normal',
								value: 'normal',
							},
							{
								name: 'Fast',
								value: 'fast',
							},
						],
						default: 'normal',
						description: 'Activity level of the sensor',
						routing: {
							send: {
								type: 'body',
								property: 'activity',
							},
						},
					},
					{
						displayName: 'Grey',
						name: 'grey',
						type: 'boolean',
						default: false,
						description: 'Whether the sensor appears grey',
						routing: {
							send: {
								type: 'body',
								property: 'grey',
							},
						},
					},
					{
						displayName: 'Key1',
						name: 'key1',
						type: 'string',
						default: '',
						description: 'Custom field key1',
						routing: {
							send: {
								type: 'body',
								property: 'key1',
							},
						},
					},
					{
						displayName: 'Key2',
						name: 'key2',
						type: 'string',
						default: '',
						description: 'Custom field key2',
						routing: {
							send: {
								type: 'body',
								property: 'key2',
							},
						},
					},
					{
						displayName: 'Key3',
						name: 'key3',
						type: 'string',
						default: '',
						description: 'Custom field key3',
						routing: {
							send: {
								type: 'body',
								property: 'key3',
							},
						},
					},
					{
						displayName: 'On Fire',
						name: 'onFire',
						type: 'boolean',
						default: false,
						description: 'Whether the sensor is on fire',
						routing: {
							send: {
								type: 'body',
								property: 'on_fire',
							},
						},
					},
				],
			},
		],
	};
}
