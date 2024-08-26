<template>
  <div class="main" ref="messagesContainer">
    <div class="messages">
      <div
        :class="['box', { fromUser: user.id == m.user.id }]"
        v-for="m in messages"
        :key="m.id"
      >
        <div>
          <div v-if="user.id !== m.user.id" class="user">
            {{ m.user.firstname }}
          </div>
          <div class="text-container">
            <div class="text">{{ m.text }}</div>
          </div>

          <div class="timestamp">
            {{ formatTime(m.timestamp) }}
          </div>
        </div>
      </div>
    </div>
    <UTextarea :rows="2" v-model="userInput" />
    <UButton @click="sendMessage">Send</UButton>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();
const { user } = useSettings();
const userInput = ref('');

const messagesContainer = ref([]);
onMounted(() => {
  scrollToBottom();
});

//Suscribe to realtime updates
const channel = supabase
  .channel('schema-db-changes')
  .on(
    'postgres_changes',
    {
      event: 'INSERT',
      schema: 'public',
    },
    (payload) => refresh()
  )
  .subscribe();

//Get all messages related to current Circuit
const { data: messages, refresh } = await useAsyncData('messages', async () => {
  const { data } = await supabase
    .from('trot_message')
    .select('timestamp, id, text, user:trot_user(firstname, lastname, id)')
    .eq('circuit', user.value.circuit);
  return data;
});

//Send message
const sendMessage = async () => {
  const { data, error } = await supabase
    .from('trot_message')
    .insert({
      user: user.value.id,
      text: userInput.value,
      circuit: user.value.circuit,
      timestamp: new Date().toISOString(),
    })
    .select();
};

//On messages refresh, wait then scroll to bottom
watch(messages, () => {
  nextTick(() => {
    scrollToBottom();
  });
});

//Scroll containing div to bottom
const scrollToBottom = () => {
  var container = messagesContainer.value;
  console.log(container.scrollHeight);
  container.scrollTop = container.scrollHeight;
};

const formatTime = (t) => {
  const now = new Date();
  const then = new Date(t);

  const diffInYear = now.getYear() - then.getYear();
  const diffInMonth = now.getMonth() - then.getMonth();
  const diffInDate = now.getDate() - then.getDate();

  var resp = 'Hier';
  //   resp = now;
  if (diffInYear + diffInMonth + diffInDate == 0) {
    resp = "aujourd'hui";
  }

  let options = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  };

  return then.toLocaleTimeString('fr-us', options);
};
</script>

<style lang="scss" scoped>
.messages {
  .box {
    padding: 10px;
    display: flex;
    flex-direction: column;

    &.fromUser {
      div {
        text-align: right;
      }
      .text {
        color: white;
        background-color: #0099ff;
      }
    }
    .user,
    .timestamp {
      font-size: 0.75em;
      opacity: 0.7;
      margin: 0 10px;
    }
    .text-container {
      margin: 6px 0;
    }
    .text {
      max-width: 80%;
      display: inline-block;
      color: #111;
      border-radius: 16px;
      background-color: #eee;
      padding: 6px 12px;
    }
  }
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
