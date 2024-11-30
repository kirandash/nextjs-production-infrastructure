'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface User {
  id: number;
  name: string;
  email: string;
  status: 'active' | 'inactive';
  lastLogin: Date;
  role: string;
}

interface Task {
  id: number;
  title: string;
  description: string;
  status: 'todo' | 'in_progress' | 'completed';
  assignee: number;
  dueDate: Date;
  priority: 'low' | 'medium' | 'high';
}

interface NotificationMessage {
  id: number;
  message: string;
  type: 'info' | 'warning' | 'error';
  timestamp: Date;
}

// Add these interfaces for chart typing
interface ChartDataset {
  label: string;
  data: number[];
  backgroundColor: string[];
  borderColor: string[];
  borderWidth: number;
}

interface ChartData {
  labels: string[];
  datasets: ChartDataset[];
}

export default function ComplexDashboardPage() {
  // State management for various features
  const [users] = useState<User[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [notifications, setNotifications] = useState<NotificationMessage[]>([]);

  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortField] = useState('dueDate');
  const [sortDirection] = useState<'asc' | 'desc'>('asc');
  const [showNotifications, setShowNotifications] = useState(false);
  const [chartData, setChartData] = useState<ChartData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [taskFormData, setTaskFormData] = useState({
    title: '',
    description: '',
    assignee: 0,
    dueDate: new Date(),
    priority: 'medium' as const,
  });

  // Complex useEffect for data fetching
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        // Simulate API calls
        // const mockUsers = Array.from({ length: 50 }, (_, index) => ({
        //   id: index + 1,
        //   name: `User ${index + 1}`,
        //   email: `user${index + 1}@example.com`,
        //   status: Math.random() > 0.5 ? 'active' : 'inactive',
        //   lastLogin: new Date(Date.now() - Math.random() * 10000000000),
        //   role: ['admin', 'user', 'manager'][Math.floor(Math.random() * 3)],
        // }));

        const mockTasks = Array.from({ length: 100 }, (_, index) => ({
          id: index + 1,
          title: `Task ${index + 1}`,
          description: `Description for task ${index + 1}`,
          status: ['todo', 'in_progress', 'completed'][
            Math.floor(Math.random() * 3)
          ] as 'todo' | 'in_progress' | 'completed',
          assignee: Math.floor(Math.random() * 50) + 1,
          dueDate: new Date(Date.now() + Math.random() * 10000000000),
          priority: ['low', 'medium', 'high'][Math.floor(Math.random() * 3)] as
            | 'low'
            | 'medium'
            | 'high',
        }));

        // setUsers(mockUsers);
        setTasks(mockTasks);
        generateChartData(mockTasks);
        generateNotifications();
      } catch (err) {
        console.log(err);
        setError('Failed to fetch dashboard data');
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  // Complex function to generate chart data
  const generateChartData = (taskData: Task[]) => {
    const statusCounts = taskData.reduce(
      (acc: { [key: string]: number }, task) => {
        acc[task.status] = (acc[task.status] || 0) + 1;
        return acc;
      },
      {}
    );

    setChartData({
      labels: ['Todo', 'In Progress', 'Completed'],
      datasets: [
        {
          label: 'Task Status Distribution',
          data: [
            statusCounts['todo'] || 0,
            statusCounts['in_progress'] || 0,
            statusCounts['completed'] || 0,
          ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(75, 192, 192, 0.5)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(75, 192, 192, 1)',
          ],
          borderWidth: 1,
        },
      ],
    });
  };

  // Function to generate mock notifications
  const generateNotifications = () => {
    const mockNotifications = Array.from({ length: 10 }, (_, index) => ({
      id: index + 1,
      message: `Notification ${index + 1}`,
      type: ['info', 'warning', 'error'][Math.floor(Math.random() * 3)] as
        | 'info'
        | 'warning'
        | 'error',
      timestamp: new Date(Date.now() - Math.random() * 1000000),
    }));
    setNotifications(mockNotifications);
  };

  // Complex memoized filtering and sorting logic
  const filteredAndSortedTasks = useMemo(() => {
    return tasks
      .filter((task) => {
        const matchesSearch =
          task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          task.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesFilter =
          filterStatus === 'all' || task.status === filterStatus;
        return matchesSearch && matchesFilter;
      })
      .sort((a, b) => {
        const aValue = a[sortField as keyof Task];
        const bValue = b[sortField as keyof Task];
        if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
  }, [tasks, searchQuery, filterStatus, sortField, sortDirection]);

  // Complex task management functions
  const handleCreateTask = useCallback(() => {
    const newTask: Task = {
      id: tasks.length + 1,
      ...taskFormData,
      status: 'todo',
    };
    setTasks([...tasks, newTask]);
    setTaskFormData({
      title: '',
      description: '',
      assignee: 0,
      dueDate: new Date(),
      priority: 'medium',
    });
  }, [tasks, taskFormData]);

  const handleUpdateTaskStatus = useCallback(
    (taskId: number, newStatus: Task['status']) => {
      setTasks(
        tasks.map((task) =>
          task.id === taskId ? { ...task, status: newStatus } : task
        )
      );
    },
    [tasks]
  );

  const handleDeleteTask = useCallback(
    (taskId: number) => {
      setTasks(tasks.filter((task) => task.id !== taskId));
    },
    [tasks]
  );

  if (loading) return <div className="p-4">Loading dashboard data...</div>;
  if (error) return <div className="p-4 text-red-500">{error}</div>;

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Complex Dashboard</h1>

      {/* Search and Filter Controls */}
      <div className="mb-6 flex gap-4">
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border rounded"
        />
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="all">All Status</option>
          <option value="todo">Todo</option>
          <option value="in_progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      {/* Task Creation Form */}
      <div className="mb-6 p-4 border rounded">
        <h2 className="text-xl font-bold mb-4">Create New Task</h2>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Task Title"
            value={taskFormData.title}
            onChange={(e) =>
              setTaskFormData({ ...taskFormData, title: e.target.value })
            }
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Description"
            value={taskFormData.description}
            onChange={(e) =>
              setTaskFormData({ ...taskFormData, description: e.target.value })
            }
            className="p-2 border rounded"
          />
          <select
            value={taskFormData.assignee}
            onChange={(e) =>
              setTaskFormData({
                ...taskFormData,
                assignee: Number(e.target.value),
              })
            }
            className="p-2 border rounded"
          >
            <option value={0}>Select Assignee</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
          <select
            value={taskFormData.priority}
            onChange={() =>
              setTaskFormData({
                ...taskFormData,
              })
            }
            className="p-2 border rounded"
          >
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>
          <button
            onClick={handleCreateTask}
            className="col-span-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Create Task
          </button>
        </div>
      </div>

      {/* Task List */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Tasks</h2>
        <div className="grid gap-4">
          {filteredAndSortedTasks.map((task) => (
            <div key={task.id} className="p-4 border rounded">
              <div className="flex justify-between items-center">
                <h3 className="font-bold">{task.title}</h3>
                <div className="flex gap-2">
                  <select
                    value={task.status}
                    onChange={(e) =>
                      handleUpdateTaskStatus(
                        task.id,
                        e.target.value as Task['status']
                      )
                    }
                    className="p-1 border rounded"
                  >
                    <option value="todo">Todo</option>
                    <option value="in_progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                  <button
                    onClick={() => handleDeleteTask(task.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <p className="text-gray-600">{task.description}</p>
              <div className="mt-2 text-sm text-gray-500">
                Assigned to: {users.find((u) => u.id === task.assignee)?.name}
                <span className="ml-4">Priority: {task.priority}</span>
                <span className="ml-4">
                  Due: {task.dueDate.toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Notifications Panel */}
      <div className="fixed bottom-4 right-4">
        <button
          onClick={() => setShowNotifications(!showNotifications)}
          className="bg-gray-800 text-white p-2 rounded"
        >
          Notifications ({notifications.length})
        </button>
        {showNotifications && (
          <div className="absolute bottom-12 right-0 w-80 max-h-96 overflow-y-auto bg-white border rounded shadow-lg">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-3 border-b ${
                  notification.type === 'error'
                    ? 'bg-red-100'
                    : notification.type === 'warning'
                      ? 'bg-yellow-100'
                      : 'bg-blue-100'
                }`}
              >
                <p>{notification.message}</p>
                <small>{notification.timestamp.toLocaleString()}</small>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Chart Section */}
      {chartData && (
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Task Status Distribution</h2>
          <div className="h-64">
            <Line data={chartData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
      )}
    </div>
  );
}
