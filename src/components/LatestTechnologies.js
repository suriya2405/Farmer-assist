// src/components/LatestTechnologies.js
import React from 'react';

const technologies = [
  {
    title: 'Autonomous Tractors',
    description: `Autonomous tractors represent a significant leap forward in agricultural technology. Equipped with GPS, artificial intelligence, and IoT sensors, these tractors can operate without human intervention, performing tasks with high precision and efficiency. They are designed to handle various agricultural activities such as plowing, planting, and harvesting. By reducing the reliance on manual labor, autonomous tractors help cut costs and minimize human error. Their ability to work continuously without fatigue ensures that large areas can be covered swiftly. Moreover, they can be programmed to follow specific paths, optimizing field operations and improving crop yields. Farmers can monitor and control these tractors remotely, allowing for better management and oversight.`,
    imageUrl: '/tractores.jpg', // Updated path
  },
  {
    title: 'Drone Technology',
    description: `Agricultural drones are revolutionizing the way farmers monitor and manage their crops. These drones are equipped with advanced cameras and sensors that provide detailed aerial images and data. They help in identifying crop health issues, pest infestations, and irrigation problems early, allowing for timely interventions. Precision spraying drones can apply pesticides and fertilizers accurately, reducing wastage and environmental impact. By covering large areas quickly, drones save time and labor costs significantly. The high-resolution data they collect enables farmers to make informed decisions, improving overall farm management. Additionally, drones can be used for mapping and surveying fields, providing valuable insights into soil conditions and crop progress.`,
    imageUrl: '/dronee.png', // Updated path
  },
  {
    title: 'Smart Irrigation Systems',
    description: `Smart irrigation systems leverage IoT sensors and weather data to optimize water usage on farms. These systems automatically adjust irrigation schedules based on real-time information about soil moisture levels, weather forecasts, and crop needs. By delivering the right amount of water at the right time, they help conserve water and prevent over-irrigation. This not only reduces water bills but also enhances crop health and yields. Farmers can monitor and control these systems remotely through mobile apps, making irrigation management more convenient. The data collected by these systems can be analyzed to further refine irrigation practices. Ultimately, smart irrigation contributes to more sustainable and efficient farming.`,
    imageUrl: '/smart-irrigation.jpeg', // Updated path
  },
  {
    title: 'Soil Health Monitoring',
    description: `Maintaining healthy soil is crucial for sustainable agriculture, and soil health monitoring devices play a vital role in this process. These devices use sensors to measure various soil parameters such as moisture, pH, temperature, and nutrient levels. By providing real-time data, they enable farmers to make precise adjustments to their soil management practices. For example, they can apply fertilizers and amendments exactly where needed, reducing waste and improving crop growth. Monitoring soil health helps prevent issues like soil erosion and nutrient depletion, ensuring long-term productivity. Additionally, these devices can be integrated with other farm management systems for comprehensive monitoring. The insights gained from soil health data lead to better decision-making and enhanced crop performance.`,
    imageUrl: '/soil-monitoring.jpg', // Updated path
  },
  {
    title: 'Robotic Harvesters',
    description: `Robotic harvesters are transforming the harvesting process by automating it with high precision and efficiency. These robots are equipped with advanced vision systems and AI algorithms to identify and pick ripe produce without damaging the plants. They can operate continuously, handling large volumes of crops faster than manual labor. By reducing the dependency on seasonal labor, robotic harvesters help stabilize production schedules and costs. They also ensure consistent quality in harvested produce, which is crucial for market competitiveness. The use of robotic harvesters can significantly reduce post-harvest losses due to timely and precise harvesting. Moreover, these robots can be programmed to handle various crops, making them versatile tools for different types of farms.`,
    imageUrl: '/Robotic Harvesters.jpeg', // Updated path
  },
  {
    title: 'Precision Farming Tools',
    description: `Precision farming tools are designed to enhance agricultural practices by utilizing technology to optimize every aspect of farming. GPS-guided equipment ensures accurate planting, fertilization, and harvesting, reducing waste and increasing efficiency. Variable Rate Technology (VRT) allows for the precise application of inputs like seeds, fertilizers, and pesticides based on soil and crop needs. Yield mapping software collects data on crop performance, helping farmers analyze and adjust their practices for better outcomes. These tools enable site-specific management, ensuring that resources are used effectively. Precision farming leads to higher yields, lower input costs, and a reduced environmental footprint. By embracing these tools, farmers can achieve more sustainable and profitable operations.`,
    imageUrl: '/Precision Farming Tools.jpg', // Updated path
  },
  {
    title: 'Vertical Farming',
    description: `Vertical farming is an innovative approach to agriculture that involves growing crops in vertically stacked layers, often in controlled indoor environments. This method maximizes the use of space and resources, allowing for year-round production regardless of external weather conditions. Vertical farms utilize hydroponic or aeroponic systems to deliver nutrients directly to plants, reducing water usage significantly compared to traditional farming. The controlled environment minimizes the need for pesticides and herbicides, resulting in cleaner produce. Vertical farming can be set up in urban areas, bringing fresh produce closer to consumers and reducing transportation costs and emissions. This technology offers a sustainable solution to meet the growing food demand while minimizing the impact on the environment.`,
    imageUrl: '/Vertical Farming.jpg', // Updated path
  },
];

const LatestTechnologies = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-700">Latest Agricultural Technologies</h1>
      <div className="space-y-12">
        {technologies.map((tech, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row md:space-x-8">
            <img src={tech.imageUrl} alt={tech.title} className="w-full md:w-1/3 rounded-lg object-cover mb-4 md:mb-0" />
            <div>
              <h2 className="text-2xl font-bold mb-4 text-green-600">{tech.title}</h2>
              <p className="text-gray-700">{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestTechnologies;
