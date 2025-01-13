import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Layout } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/Tabs';
import EventBasicDetails from '../supervisor/event-details/EventBasicDetails';
import EventDateTime from '../supervisor/event-details/EventDateTime';
import EventParticipation from '../supervisor/event-details/EventParticipation';
import EventObjectives from '../supervisor/event-details/EventObjectives';
import EventAttachments from '../supervisor/event-details/EventAttachments';
import EventNotes from '../supervisor/event-details/EventNotes';
import LocationSelect from '../supervisor/LocationSelect';

// Mock event data - in a real app, this would be fetched from an API
const mockEvent = {
  id: 1,
  title: 'Web Development Workshop',
  description: 'A comprehensive workshop covering modern web development practices.',
  category: 'technology',
  staffId: 'staff1',
  presenter: 'Dr. Ahmed Ali',
  startDate: '2024-03-20',
  endDate: '2024-03-20',
  startTime: '10:00',
  endTime: '13:00',
  duration: '3 hours',
  locationType: 'in-campus',
  selectedHall: 'adam',
  maxParticipants: '50',
  participationType: 'yes',
  targetAudience: 'students,staff',
  genderRestriction: {
    male: false,
    female: false,
  },
  objectives: [
    'Understand modern web development frameworks',
    'Learn best practices in frontend development',
    'Practice building responsive web applications'
  ],
  attachments: [],
  notes: '',
};

export default function EditEvent() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState(mockEvent);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - in a real app, this would be an API call
    console.log('Updated event data:', formData);
    navigate('/dashboard/activity-head');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Layout className="w-8 h-8 text-blue-600" />
          <h2 className="text-2xl font-bold">Edit Event</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <Tabs defaultValue="details" className="w-full">
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
                locationType={formData.locationType as 'in-campus' | 'out-campus'}
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

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => navigate('/dashboard/activity-head')}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}