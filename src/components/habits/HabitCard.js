// src/components/lists/habits/HabitCard.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IconButton from '../common/IconButton';
import { Trash, Palette, Lock, Check, ChevronDown, AlarmClock, Star, Repeat, Flag, Calendar, Flame, Zap, Trophy, Target } from 'lucide-react';

const HabitCard = ({ habit, onToggle, onCardClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [iconStates, setIconStates] = useState({
    isHighlighted: habit.isHighlighted,
    isRecurring: habit.isRecurring,
    priority: habit.priority,
    deadline: habit.deadline,
    reminder: habit.reminder,
    isLocked: habit.isLocked,
    hasPalette: habit.hasPalette,
    isTrashable: habit.isTrashable
  });

  const { 
    name, 
    isCompleted,
    heatLevel = 3,
    currentStreak = 10,
    longestStreak = 125,
    completionRate = 62,
    milestoneProgress = 5,
    nextMilestone = 10,
    totalCompletions = 0,
    totalDays = 30
  } = habit;

  const handleAction = (e, action) => {
    e.stopPropagation();
    action(habit.id);
  };

  const handleExpand = (e) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  const toggleIcon = (iconName) => {
    setIconStates(prevStates => ({
      ...prevStates,
      [iconName]: !prevStates[iconName]
    }));
  };

  const renderToggleableIcon = (IconComponent, stateName) => (
    <IconComponent
      className={`cursor-pointer w-4 h-4 ${iconStates[stateName] ? 'text-orange-main' : 'text-gray-400'}`}
      onClick={(e) => {
        e.stopPropagation();
        toggleIcon(stateName);
      }}
    />
  );

  return (
    <motion.div
      className="border rounded-lg shadow-md m-2 overflow-hidden"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex bg-white">
        {/* Main content */}
        <div className="flex-grow p-3 py-2 flex flex-col" onClick={() => onCardClick(habit.id)}>
          <div className="flex items-center space-x-2 mt-2">
            <IconButton
              icon={Check}
              onClick={(e) => handleAction(e, onToggle)}
              isActive={isCompleted}
              className={`flex-shrink-0 ${isCompleted ? 'bg-orange-main text-white' : 'bg-orange-100 text-white'}`}
              />
            <h3 className="text-style-heading flex-grow">{name}</h3>
          </div>

          <div className="flex justify-between items-center mt-2">
            <div className="flex space-x-2 flex-grow overflow-x-auto py-1 w-6">
              {renderToggleableIcon(Star, 'isHighlighted')}
              {renderToggleableIcon(Repeat, 'isRecurring')}
              {renderToggleableIcon(Flag, 'priority')}
              {renderToggleableIcon(Calendar, 'deadline')}
              {renderToggleableIcon(AlarmClock, 'reminder')}
              {renderToggleableIcon(Lock, 'isLocked')}
              {renderToggleableIcon(Palette, 'hasPalette')}
              {renderToggleableIcon(Trash, 'isTrashable')}
            </div>
            <motion.div
              className="cursor-pointer p-1"
              onClick={handleExpand}
              animate={{ rotate: isExpanded ? 180 : 0 }}
            >
              <ChevronDown className="text-gray-400 w-5 h-5" />
            </motion.div>
          </div>
        </div>

        {/* Orange section */}
        <div className="bg-orange-main w-16 flex flex-col items-center justify-center flex-shrink-0">
          <Flame className="text-white mb-1 w-6 h-6" />
          <span className="text-xl font-bold text-white">{heatLevel}</span>
        </div>
      </div>

 {/* Expandable section */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <div className="p-4 bg-orange-50">
              <div className="grid grid-cols-3 gap-3 mb-3">
                <MotivationalStat 
                  icon={Zap} 
                  label="Current Streak" 
                  value={currentStreak}
                  subtext={`Longest: ${longestStreak}`}
                />
                <MotivationalStat 
                  icon={Trophy} 
                  label="Milestone" 
                  value={`${milestoneProgress}/${nextMilestone}`} 
                  subtext="Keep it up!"
                />
                <MotivationalStat 
                  icon={Target} 
                  label="Completion Rate" 
                  value={`${completionRate}%`}
                  subtext="Overall progress"
                />
              </div>
              <ProgressBar label="Milestone Progress" current={milestoneProgress} total={nextMilestone} color="bg-orange-500" />
              <ProgressBar label="Overall Progress" current={totalCompletions} total={totalDays} color="bg-green-500" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const MotivationalStat = ({ icon: Icon, label, value, subtext }) => (
  <div className="flex items-center space-x-2">
    <Icon className="text-orange-500" size={24} />
    <div>
      <div className="text-sm font-semibold text-gray-800">{value}</div>
      <div className="text-xs text-gray-500">{label}</div>
      <div className="text-xs text-orange-600">{subtext}</div>
    </div>
  </div>
);

const ProgressBar = ({ label, current, total, color }) => (
  <div className="mb-3">
    <div className="flex justify-between items-center mb-1">
      <span className="text-xs text-gray-500">{label}</span>
      <span className="text-xs font-medium text-gray-700">{current}/{total}</span>
    </div>
    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
      <motion.div 
        className={`h-full ${color} rounded-full`}
        initial={{ width: 0 }}
        animate={{ width: `${(current/total*100).toFixed(0)}%` }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </div>
  </div>
);

export default HabitCard;