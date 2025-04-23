import React from 'react';
import { motion } from 'framer-motion';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Line, Pie } from 'react-chartjs-2';
import { marketTrends, propertyTypes } from '../data/properties';
import { FaChartLine, FaChartPie } from 'react-icons/fa';

// Enregistrer les composants Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const MarketTrends: React.FC = () => {
  // Données pour le graphique linéaire
  const lineChartData = {
    labels: marketTrends.map(data => data.month),
    datasets: [
      {
        label: 'Prix moyen au m²',
        data: marketTrends.map(data => data.price),
        borderColor: '#4A90E2',
        backgroundColor: 'rgba(74, 144, 226, 0.2)',
        tension: 0.4,
        fill: true,
        pointBackgroundColor: '#4A90E2',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#4A90E2',
        pointRadius: 4,
        pointHoverRadius: 6
      }
    ]
  };

  // Options pour le graphique linéaire
  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: '#333',
        bodyColor: '#666',
        borderColor: '#ddd',
        borderWidth: 1,
        padding: 10,
        displayColors: false,
        callbacks: {
          label: function(context: any) {
            return `${context.parsed.y} €/m²`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        },
        ticks: {
          callback: function(value: any) {
            return value + ' €';
          }
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    },
    interaction: {
      intersect: false,
      mode: 'index'
    },
    animation: {
      duration: 1000
    }
  };

  // Données pour le graphique circulaire
  const pieChartData = {
    labels: Object.keys(propertyTypes).map(key => {
      const labels: Record<string, string> = {
        apartment: 'Appartements',
        house: 'Maisons',
        villa: 'Villas',
        loft: 'Lofts'
      };
      return labels[key] || key;
    }),
    datasets: [
      {
        data: Object.values(propertyTypes),
        backgroundColor: [
          '#4A90E2',
          '#7D7D7D',
          '#355E3B',
          '#D2B48C',
        ],
        borderColor: '#ffffff',
        borderWidth: 2,
        hoverOffset: 15
      }
    ]
  };

  // Options pour le graphique circulaire
  const pieChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          padding: 15,
          usePointStyle: true,
          boxWidth: 8,
          font: {
            size: 12
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: '#333',
        bodyColor: '#666',
        borderColor: '#ddd',
        borderWidth: 1,
        padding: 10,
        callbacks: {
          label: function(context: any) {
            const label = context.label || '';
            const value = context.parsed || 0;
            return `${label}: ${value}%`;
          }
        }
      }
    },
    animation: {
      animateRotate: true,
      animateScale: true
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const marketStats = [
    { label: "Nouveaux biens", value: "+15%", trend: "up" },
    { label: "Délai de vente", value: "45 jours", trend: "down" },
    { label: "Taux de négociation", value: "-5.2%", trend: "down" },
    { label: "Rentabilité locative", value: "4.3%", trend: "stable" }
  ];

  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <motion.div className="text-center mb-8" variants={itemVariants}>
        <div className="flex justify-center items-center mb-3">
          <FaChartLine className="text-4xl text-[#4A90E2]" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          Tendances du marché immobilier
        </h2>
        <p className="text-gray-600 max-w-lg mx-auto">
          Suivez l'évolution des prix et la répartition des types de biens dans votre secteur
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div 
          className="bg-gray-50 p-4 md:p-6 rounded-xl"
          variants={itemVariants}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              <FaChartLine /> Évolution des prix au m²
            </h3>
          </div>
          <motion.div 
            className="h-64 md:h-80"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Line data={lineChartData} options={lineChartOptions} />
          </motion.div>
        </motion.div>

        <motion.div 
          className="bg-gray-50 p-4 md:p-6 rounded-xl"
          variants={itemVariants}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              <FaChartPie /> Répartition des types de biens
            </h3>
          </div>
          <motion.div 
            className="h-64 md:h-80"
            initial={{ opacity: 0, rotateY: 90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Pie data={pieChartData} options={pieChartOptions} />
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
        variants={containerVariants}
      >
        {marketStats.map((stat, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 p-4 rounded-xl text-center"
            variants={itemVariants}
            whileHover={{ scale: 1.05, backgroundColor: '#f8f9fa' }}
          >
            <p className="text-gray-600 text-sm mb-2">{stat.label}</p>
            <h4 className={`text-2xl font-bold ${
              stat.trend === 'up' ? 'text-green-600' : 
              stat.trend === 'down' ? 'text-[#4A90E2]' : 
              'text-gray-800'
            }`}>
              {stat.value}
            </h4>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default MarketTrends;
