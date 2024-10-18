use anchor_lang::prelude::*;
declare_id!("8BZJ1fBQr1gbrKkoeevX6UG5E1maMJCWKCkBtxc71V4o");

#[program]
 mod crud {
    use super::*;

    pub fn create_tweet(ctx: Context<TweetContext>, title: String, message: String) -> Result<()> {
        let tweet = &mut ctx.accounts.tweet;
        tweet.owner = *ctx.accounts.user.key;
        tweet.title = title;
        tweet.message = message;
        Ok(())
    }

    pub fn update_tweet(ctx: Context<UpdateTweetContext>, title: String, message: String) -> Result<()> {
        let tweet = &mut ctx.accounts.tweet;
        tweet.owner = *ctx.accounts.user.key;
        tweet.title = title;
        tweet.message = message;
        Ok(())
    }

    pub fn delete_tweet(_ctx: Context<DeleteTweetContext>, title: String) -> Result<()> {
        msg!("Tweet titled '{}' deleted", title);
        Ok(())
    }
}

#[derive(Accounts)]
#[instruction(title: String)]
pub struct DeleteTweetContext<'info> {
    #[account(mut)]
    pub user: Signer<'info>,
    #[account(
        mut,
        seeds = [title.as_bytes(), user.key().as_ref()],
        bump,
        close = user
    )]
    pub tweet: Account<'info, Tweet>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
#[instruction(title: String, message: String)]
pub struct UpdateTweetContext<'info> {
    #[account(mut)] // Mutable payer
    pub user: Signer<'info>,
    #[account(
        mut,
        seeds = [title.as_bytes(), user.key().as_ref()],
        bump,
        realloc = 8 + 32 + 4 + title.len() + 4 + message.len(),
        realloc::payer = user,
        realloc::zero = true
    )]
    pub tweet: Account<'info, Tweet>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
#[instruction(title: String)]
pub struct TweetContext<'info> {
    #[account(mut)]
    pub user: Signer<'info>,
    #[account(
        init,
        payer = user,
        space = 8 + Tweet::INIT_SPACE,
        seeds = [title.as_bytes(), user.key().as_ref()],
        bump
    )]
    pub tweet: Account<'info, Tweet>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct Tweet {
    pub title: String,
    pub message: String,
    pub owner: Pubkey,
}

impl Tweet {
    pub const INIT_SPACE: usize = 32 + 32 + 32; // Calculate space manually
}
