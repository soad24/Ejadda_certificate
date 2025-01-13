import React, { useState } from 'react';
import { Layout } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/Tabs';
import EventBasicDetails from './event-details/EventBasicDetails';
import EventDateTime from './event-details/EventDateTime';
import EventParticipation from './event-details/EventParticipation';
import EventObjectives from './event-details/EventObjectives';
import EventAttachments from './event-details/EventAttachments';
import EventNotes from './event-details/EventNotes';
import LocationSelect from './LocationSelect';

const TABS = ['details', 'datetime', 'location', 'participation', 'additional'] as const;
type TabType = typeof TABS[number];

export default function EventForm() {
  const [activeTab, setActiveTab] = useState<TabType>('details');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    staffId: '',
    presenter: '',
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
    duration: '',
    locationType: 'in-campus' as 'in-campus' | 'out-campus',
    selectedHall: '',
    maxParticipants: '',
    participationType: 'yes',
    targetAudience: '',
    genderRestriction: {
      male: false,
      female: false,
    },
    objectives: [] as string[],
    attachments: [] as File[],
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleNext = () => {
    const currentIndex = TABS.indexOf(activeTab);
    if (currentIndex < TABS.length - 1) {
      setActiveTab(TABS[currentIndex + 1]);
    }
  };

  const handleBack = () => {
    const currentIndex = TABS.indexOf(activeTab);
    if (currentIndex > 0) {
      setActiveTab(TABS[currentIndex - 1]);
    }
  };

  const isLastTab = activeTab === TABS[TABS.length - 1];
  const isFirstTab = activeTab === TABS[0];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Layout className="w-8 h-8 text-blue-600" />
          <h2 className="text-2xl font-bold">Create New Event</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <Tabs value={activeTab} className="w-full">
            <TabsList>
              <TabsTrigger value="details">Event Details</TabsTrigger>
              <TabsTrigger value="datetime">Date & Time</TabsTrigger>
              <TabsTrigger value="location">Location</TabsTrigger>
              <TabsTrigger value="participation">Participation</TabsTrigger>
              <TabsTrigger value="additional">Additional Info</TabsTrigger>
            </TabsList>

            <TabsContent value="details">
              <EventBasicDetails
                title={formData.title}
                description={formData.description}
                category={formData.category}
                staffId={formData.staffId}
                presenter={formData.presenter}
                onTitleChange={(title) => setFormData({ ...formData, title })}
                onDescriptionChange={(description) => setFormData({ ...formData, description })}
                onCategoryChange={(category) => setFormData({ ...formData, category })}
                onStaffChange={(staffId) => setFormData({ ...formData, staffId })}
                onPresenterChange={(presenter) => setFormData({ ...formData, presenter })}
              />
            </TabsContent>

            <TabsContent value="datetime">
              <EventDateTime
                startDate={formData.startDate}
                endDate={formData.endDate}
                startTime={formData.startTime}
                endTime={formData.endTime}
                onStartDateChange={(date) => setFormData({ ...formData, startDate: date })}
                onEndDateChange={(date) => setFormData({ ...formData, endDate: date })}
                onStartTimeChange={(time) => setFormData({ ...formData, startTime: time })}
                onEndTimeChange={(time) => setFormData({ ...formData, endTime: time })}
                onDurationChange={(duration) => setFormData({ ...formData, duration })}
              />
            </TabsContent>

            <TabsContent value="location">
              <LocationSelect
                locationType={formData.locationType}
                selectedHall={formData.selectedHall}
                onLocationTypeChange={(type) => setFormData({ ...formData, locationType: type })}
                onHallChange={(hall) => setFormData({ ...formData, selectedHall: hall })}
              />
            </TabsContent>

            <TabsContent value="participation">
              <EventParticipation
                maxParticipants={formData.maxParticipants}
                participationType={formData.participationType}
                targetAudience={formData.targetAudience}
                genderRestriction={formData.genderRestriction}
                onMaxParticipantsChange={(value) => setFormData({ ...formData, maxParticipants: value })}
                onParticipationTypeChange={(value) => setFormData({ ...formData, participationType: value })}
                onTargetAudienceChange={(value) => setFormData({ ...formData, targetAudience: value })}
                onGenderRestrictionChange={(gender, value) =>
                  setFormData({
                    ...formData,
                    genderRestriction: { ...formData.genderRestriction, [gender]: value },
                  })
                }
              />
            </TabsContent>

            <TabsContent value="additional">
              <div className="space-y-6">
                <EventObjectives
                  objectives={formData.objectives}
                  onAddObjective={(objective) =>
                    setFormData({ ...formData, objectives: [...formData.objectives, objective] })
                  }
                  onRemoveObjective={(index) =>
                    setFormData({
                      ...formData,
                      objectives: formData.objectives.filter((_, i) => i !== index),
                    })
                  }
                />
                <EventAttachments
                  attachments={formData.attachments}
                  onAttachmentAdd={(files) =>
                    setFormData({ ...formData, attachments: [...formData.attachments, ...files] })
                  }
                  onAttachmentRemove={(index) =>
                    setFormData({
                      ...formData,
                      attachments: formData.attachments.filter((_, i) => i !== index),
                    })
                  }
                />
                <EventNotes
                  notes={formData.notes}
                  onChange={(notes) => setFormData({ ...formData, notes })}
                />
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-between space-x-3">
            {!isFirstTab && (
              <button
                type="button"
                onClick={handleBack}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Back
              </button>
            )}
            <div className="flex-1" />
            {isLastTab ? (
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Create Event
              </button>
            ) : (
              <button
                type="button"
                onClick={handleNext}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Next
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}