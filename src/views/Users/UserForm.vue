<template>
  <SimpleForm :onSubmit="submit" @done="$router.back()">
    <p class="span-2 form__title">{{ isEdit ? 'Update User' : 'Create New Uer' }}</p>

    <div
        style="
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-column-gap: 20px;
      "
        class="span-2"
    >
      <v-text-field
          v-model="user.name"
          dense
          :rules="[required('A title must be provided')]"
          label="User Name"
          outlined
      />
      <v-select
          v-model="user.email"
          dense
          outlined
          :rules="[required('An valid email is required')]"
          label="Select Channel"
          :items="channels"
      />
    </div>

    <loading-dialog v-model="loading" message="Fetching User Data"/>
  </SimpleForm>
</template>

<script>
import SimpleForm from '../../components/Form';
import LoadingDialog from '../../components/LoadingDialog';
// import {NotificationsService} from '@/services/notifications-service';
import {required} from '@/utils/validators';
// import {getDays} from "@/utils/local";
// import moment from "moment"

export default {
  name: 'Form',
  components: {LoadingDialog, SimpleForm},

  data: () => ({
    isEdit: false,
    loading: false,
    // service: new NotificationsService(),
    user:{},
    errors: [],
  }),

  mounted() {
    // this.loadNotification();
  },

  methods: {
    required,
//     getDays,
//     async loadNotification() {
//       if (!this.$route.query.id) return;
//       this.isEdit = true;
//       this.loading = true;
//       this.notification = await this.service.fetchOne(this.$route.query.id);
//       this.loading = false;
//     },
//     preCheck(context) {
//       if (!context.validate()) return false;

//       if (!this.notification.isForAndroid && !this.notification.isForIOS) {
//         context.reportError({
//           title: 'Invalid Notification Data',
//           description:
//               'Select platform for notification i.e. Android or iOS or both'
//         });

//         return false;
//       }

//       return true;
//     },
//     async submit(context) {
//       if (this.preCheck(context)) {
//         if (this.isEdit) {
//           context.changeLoadingMessage('Updating Notification');
//           try {
//             await this.service.update(this.notification);
//             return true
//           } catch (e) {
//             context.reportError({
//               title: 'Error occurred while updating Notification',
//               description: e.toString()
//             });
//             return false
//           }
//         } else {
//           try {
//             context.changeLoadingMessage('Creating A New Notification');
//             await this.service.create(this.notification);
//             return true
//           } catch (e) {
//             context.reportError({
//               title: 'Error occurred while creating Notification',
//               description: e.toString()
//             });
//             return false
//           }
//         }
//       }
//     },
//     openScheduleDialog() {
//       this.openSchedule = true
//       if (this.notification.schedule) {
//         this.schedule = {...this.notification.schedule}
//       }
//     },
//     async sendNotification(context) {
//       if (this.preCheck(context)) {
//         context.changeLoadingStatus(true);
//         context.changeLoadingMessage('Sending Notification to Devices');
//         await this.service.send(this.notification);
//         context.changeLoadingStatus(false);
//       }
//     },
//     async sendAndSaveNotification(context) {
//       if (this.preCheck(context)) {
//         context.changeLoadingStatus(true);
//         await this.submit(context);
//         await this.sendNotification(context)

//         this.$router.back()
//       }
//     },
//     cancelSchedule() {
//       this.openSchedule = false
//     },
//     submitSchedule() {
//       this.errors = []
//       if (this.schedule.time) {
//         this.schedule.days.sort()
//         this.notification.schedule = {...this.schedule}
//         this.openSchedule = false
//       } else {
//         this.errors.push("Time is required")
//       }
//     },
//     formatTime(time) {
//       return moment(time, "HH:mm").format("h:mm A")
//     }
  }
};
</script>

<style scoped>
p {
  font-weight: bold;
  text-align: left;
}
</style>
