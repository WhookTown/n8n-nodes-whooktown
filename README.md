# n8n-nodes-whooktown

This is an n8n community node for [Whooktown](https://whooktown.com), allowing you to send sensor data to your Whooktown city visualization from n8n workflows.

## Installation

### In n8n Community Nodes

1. Go to **Settings** > **Community Nodes**
2. Select **Install**
3. Enter `n8n-nodes-whooktown`
4. Agree to the risks and select **Install**

### Manual Installation

```bash
npm install n8n-nodes-whooktown
```

## Prerequisites

You need a Whooktown account with a sensor token that has the `sensor:w` role.

To get a token:
1. Log in to your Whooktown dashboard
2. Go to **Settings** > **API Tokens**
3. Create a new token with the **sensor** role

## Credentials

| Field | Description |
|-------|-------------|
| **API URL** | URL of your Whooktown sensor-endpoint (e.g., `https://sensor.whooktown.com`) |
| **API Token** | Your sensor token with `sensor:w` role |

## Node: Whooktown

### Resource: Sensor

#### Operation: Send Data

Send sensor data to update a building's state in your Whooktown city.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| Sensor ID | string | Yes | UUID v4 of the sensor (matches a building in your layout) |
| Status | options | No | Sensor status: `online`, `offline`, `warning`, `critical` |

**Additional Fields:**

| Field | Type | Description |
|-------|------|-------------|
| Activity | options | Activity level: `slow`, `normal`, `fast` (affects animations) |
| Grey | boolean | Whether the building appears greyed out |
| Key1 | string | Custom data field |
| Key2 | string | Custom data field |
| Key3 | string | Custom data field |
| On Fire | boolean | Whether the building shows fire effect |

### Example Usage

**Basic sensor update:**
```json
{
  "sensorId": "1377959e-97ce-46c1-9715-22c34bb9afbe",
  "status": "online"
}
```

**Full update with activity:**
```json
{
  "sensorId": "1377959e-97ce-46c1-9715-22c34bb9afbe",
  "status": "warning",
  "additionalFields": {
    "activity": "fast",
    "onFire": true
  }
}
```

## Use Cases

- **Server Monitoring**: Connect your monitoring tools (Prometheus, Grafana, Datadog) to visualize server health in your 3D city
- **CI/CD Pipelines**: Update building states based on build/deployment status
- **IoT Sensors**: Bridge physical sensors to your virtual city
- **Business Metrics**: Visualize KPIs as building states

## Example Workflow

1. **Webhook Trigger**: Receive alerts from your monitoring system
2. **Whooktown Node**: Update the corresponding building's status
3. Your 3D city reflects real-time infrastructure health

## Development

```bash
# Install dependencies
npm install

# Start n8n with the node loaded (hot reload)
npm run dev

# Build for production
npm run build

# Lint code
npm run lint
```

## Compatibility

- n8n version: 1.0+
- Node.js: 22+

## Resources

- [Whooktown Documentation](https://whooktown.com/docs)
- [Whooktown API Reference](https://whooktown.com/docs/api)
- [n8n Community Nodes](https://docs.n8n.io/integrations/community-nodes/)

## License

[MIT](LICENSE.md)
