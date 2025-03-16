import { supabase } from '~/server/utils/supabase';

export default defineEventHandler(async () => {
  const { data, error } = await supabase.from('hives').select('*');
  
  if (error) {
    throw createError({ statusCode: 500, statusMessage: error.message });
  }

  return data;
});
